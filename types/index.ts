export type Element = 'grass' | 'ground' | 'electric' | 'water' | 'fire' | 'ice' | 'dragon' | 'dark' | 'neutral'

export interface Pal {
  id: number
  key: string
  name: string
  element: Element[]
  work_traits: WorkTrait[]
  drop_items: string[]
  skill: {
    name: string
    description: string
  }
  description: string
}

export interface WorkTrait {
  type: 'handiwork' | 'transporting' | 'farming' | 'gathering' | 'mining' | 'planting' | 'lumbering' | 'medicine_production' | 'kindling' | 'watering' | 'generating_electricity' | 'cooling'
  level: number
}