export type Category = 'all' | 'men' | 'women' | 'ceremonial' | 'ready-to-wear'

export type Piece = {
  slug: string
  name: string
  category: Exclude<Category, 'all'>
  fabric: string
  fabricOrigin: string
  description: string
  image: string
  featured: boolean
  aspectTall?: boolean
}

export type NavLink = {
  href: string
  label: string
}