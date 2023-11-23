export interface MenuItem {
  name: String
  desc?: String
  path: String
  img?: String
  children?: Array<MenuItem>
}

export interface Menus {
  title: String
  children: Array<MenuItem>
}
