export interface Nation {
  label: string
  value: string
}

export interface ArticleWithInfo {
  status: string
  copyright: string
  response: {
    docs: Article[]
    meta: Meta
  }
}

export interface Meta {
  hits: number
  offset: number
  time: number
}

export interface Article {
  web_url: string
  snippet: string
  print_page: string
  print_section: string

  source: string

  multimedia: Multimeda[]

  headline: Headline

  keywords: Keywword[]

  pub_date: string

  document_type: string

  news_desk: string

  section_name: string

  byline: Byline

  type_of_material: string

  _id: string

  word_count: number

  uri: string
}

export interface Headline {
  main: string

  kicker: string

  content_kicker: string

  print_headline: string

  name: string

  seo: string

  sub: string
}

export interface Multimeda {
  rank: number

  subtype: string

  caption: string

  credit: string

  type: string

  url: string

  height: number

  width: number

  legacy: {
    xlarge: string
    xlargeheight: number
    xlargewidth: number
  }

  crop_name: string
}

export interface Keywword {
  name: string

  value: string

  rank: number

  major: string
}

export interface Byline {
  original: string
  person: Person[]
}

export interface Person {
  firstname: string
  middlename: string
  lastname: string
}
