import React, { ReactNode } from "react"

export interface contextProp{
  trending: number[],
  upcoming: number[],
  topRated: number[],
  cast: number[],
  similarMovie: number[],
}

export interface childProp{
  children: ReactNode
}