import React, { ReactNode } from "react"

export interface contextProp{
  trending: never[],
  upcoming: never[],
  topRated: never[],
  cast: number[],
  similarMovie: number[],
  results: number[],
  loading: boolean,
  setLoading: (value: React.SetStateAction<boolean>) => void
}

export interface childProp{
  children: ReactNode
}