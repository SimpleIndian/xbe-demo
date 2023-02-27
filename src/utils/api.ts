export const API_BASE_URL = (path: string) => `https://openlibrary.org`;

export interface Doc {
  key: string;
  type: string;
  seed: string[];
  title: string;
  title_suggest: string;
  edition_count: number;
  edition_key: string[];
  publish_date: string[];
  publish_year: number[];
  first_publish_year: number;
  number_of_pages_median: number;
  lccn: string[];
  publish_place: string[];
  oclc: string[];
  contributor: string[];
  lcc: string[];
  ddc: string[];
  isbn: string[];
  last_modified_i: number;
  ebook_count_i: number;
  ebook_access: string;
  has_fulltext: boolean;
  public_scan_b: boolean;
  ia: string[];
  ia_collection: string[];
  ia_collection_s: string;
  lending_edition_s: string;
  lending_identifier_s: string;
  printdisabled_s: string;
  cover_edition_key: string;
  cover_i: number;
  publisher: string[];
  language: string[];
  author_key: string[];
  author_name: string[];
  author_alternative_name: string[];
  person: string[];
  place: string[];
  subject: string[];
  time: string[];
  id_alibris_id: string[];
  id_amazon: string[];
  id_canadian_national_library_archive: string[];
  id_depósito_legal: string[];
  id_goodreads: string[];
  id_google: string[];
  id_librarything: string[];
  id_overdrive: string[];
  id_paperback_swap: string[];
  id_wikidata: string[];
  ia_loaded_id: string[];
  ia_box_id: string[];
  publisher_facet: string[];
  person_key: string[];
  place_key: string[];
  time_facet: string[];
  person_facet: string[];
  subject_facet: string[];
  _version_: number;
  place_facet: string[];
  lcc_sort: string;
  author_facet: string[];
  subject_key: string[];
  ddc_sort: string;
  time_key: string[];
}

export interface SearchRes {
  docs: Doc[];
  numFound: number;
  numFoundExact: boolean;
  num_found: number;
  offset: null;
  q: string;
  start: number;
}

export interface Book {
  description: string;
  links: Link[];
  title: string;
  covers: number[];
  subject_places: string[];
  subject_people: string[];
  key: string;
  authors: Author[];
  excerpts: Excerpt[];
  type: Type3;
  subjects: string[];
  latest_revision: number;
  revision: number;
  created: Created;
  last_modified: LastModified;
}

export interface Link {
  title: string;
  url: string;
  type: Type;
}

export interface Type {
  key: string;
}

export interface Author {
  author: Author2;
  type: Type2;
}

export interface Author2 {
  key: string;
}

export interface Type2 {
  key: string;
}

export interface Excerpt {
  comment: string;
  excerpt: string;
  author: Author3;
}

export interface Author3 {
  key: string;
}

export interface Type3 {
  key: string;
}

export interface Created {
  type: string;
  value: string;
}

export interface LastModified {
  type: string;
  value: string;
}
