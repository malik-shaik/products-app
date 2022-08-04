import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'

export type ErrorType = AxiosError | Error | unknown

export interface useSearchProductsParams {
  searchText: string
}

export interface Product {
  name: string
  category: string
  image: any
}

interface UseSearchProductsResult {
  products: Product[]
  loading: boolean
  error: ErrorType
  searchProducts: (search: string) => void
}

/**
 * Fetches product data by given search text
 * @returns products, error, loading
 */
export const useSearchProducts = (): UseSearchProductsResult => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<ErrorType>(null)

  const getProducts = async (searchText: string) => {
    try {
      setLoading(true)

      // Fetch products
      const url =
        'https://pfp-public-productdb-api.azurewebsites.net/api/product/search'
      const config = { headers: { 'Content-Type': 'application/json' } }
      const body = JSON.stringify({
        searchText,
        pageSize: 9,
      })

      const { data } = await axios.post(url, body, config)

      //   Fetch images of products
      const arrayOfPromises = data.results.map(async (result: any) => {
        const imageApiUrl = `https://pfp-public-productdb-api.azurewebsites.net/api/picture/${result.productPictures[0].pictureId}`
        const imageData = await axios.get(imageApiUrl, {
          responseType: 'blob',
        })

        const urlCreator = window.URL || window.webkitURL
        const image = urlCreator.createObjectURL(imageData?.data)

        return {
          name: result.name,
          image: image,
          category: result.productCategoryRelations[0].productCategoryType.name,
        }
      })

      const products = await Promise.all(arrayOfPromises)

      setProducts(products)
    } catch (error) {
      console.error(error)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProducts('')
  }, [])

  return { searchProducts: getProducts, loading, error, products }
}
