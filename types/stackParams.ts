import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStack = {
  Home: undefined,
  Movie: {itemProp: any | undefined},
  Person: {personProp: any | undefined}
}

export type HomeProp = NativeStackScreenProps<RootStack, "Home">

export type MovieProp = NativeStackScreenProps<RootStack, "Movie">

export type PersonProp = NativeStackScreenProps<RootStack, "Person">