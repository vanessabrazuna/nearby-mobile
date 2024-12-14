import { Pressable, PressableProps, Text } from "react-native"
import { s } from "./styles"

type CategoryProps = PressableProps & {
  iconId: string
  isSeleted?: boolean
  name: string
}

export function Category({ name, iconId, isSeleted = false, ...rest }: CategoryProps) {
  return (
    <Pressable style={[s.container]}>
      <Text style={[s.name]}>{name}</Text>
    </Pressable>
  )
}