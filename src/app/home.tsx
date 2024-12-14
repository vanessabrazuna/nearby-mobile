import { useEffect, useState } from "react"
import { Alert, View } from "react-native"

import { api } from "@/services/api"
import { Categories, CategoriesProps } from "@/components/categories"

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([])

  async function fecthCategories() {
    try {
      const { data } = await api.get("/categories")
      setCategories(data)
    } catch (error) {
      console.log(error)
      Alert.alert("Categorias", "Não foi possível carregar as categorias.")
    }
  }

  useEffect(() => {
    fecthCategories()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Categories data={categories} />
    </View>
  )
}