export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  PageSectionsDynamicZoneInput: any;
  /** A string used to identify an i18n locale */
  I18NLocaleCode: any;
};




export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  total: Scalars['Int'];
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  pageCount: Scalars['Int'];
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type IdFilterInput = {
  and?: Maybe<Array<Maybe<Scalars['ID']>>>;
  or?: Maybe<Array<Maybe<Scalars['ID']>>>;
  not?: Maybe<IdFilterInput>;
  eq?: Maybe<Scalars['ID']>;
  eqi?: Maybe<Scalars['ID']>;
  ne?: Maybe<Scalars['ID']>;
  startsWith?: Maybe<Scalars['ID']>;
  endsWith?: Maybe<Scalars['ID']>;
  contains?: Maybe<Scalars['ID']>;
  notContains?: Maybe<Scalars['ID']>;
  containsi?: Maybe<Scalars['ID']>;
  notContainsi?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  gte?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  lte?: Maybe<Scalars['ID']>;
  null?: Maybe<Scalars['Boolean']>;
  notNull?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  between?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type BooleanFilterInput = {
  and?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  or?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  not?: Maybe<BooleanFilterInput>;
  eq?: Maybe<Scalars['Boolean']>;
  eqi?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  startsWith?: Maybe<Scalars['Boolean']>;
  endsWith?: Maybe<Scalars['Boolean']>;
  contains?: Maybe<Scalars['Boolean']>;
  notContains?: Maybe<Scalars['Boolean']>;
  containsi?: Maybe<Scalars['Boolean']>;
  notContainsi?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  null?: Maybe<Scalars['Boolean']>;
  notNull?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  between?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type StringFilterInput = {
  and?: Maybe<Array<Maybe<Scalars['String']>>>;
  or?: Maybe<Array<Maybe<Scalars['String']>>>;
  not?: Maybe<StringFilterInput>;
  eq?: Maybe<Scalars['String']>;
  eqi?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  notContains?: Maybe<Scalars['String']>;
  containsi?: Maybe<Scalars['String']>;
  notContainsi?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  null?: Maybe<Scalars['Boolean']>;
  notNull?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  between?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type IntFilterInput = {
  and?: Maybe<Array<Maybe<Scalars['Int']>>>;
  or?: Maybe<Array<Maybe<Scalars['Int']>>>;
  not?: Maybe<IntFilterInput>;
  eq?: Maybe<Scalars['Int']>;
  eqi?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  startsWith?: Maybe<Scalars['Int']>;
  endsWith?: Maybe<Scalars['Int']>;
  contains?: Maybe<Scalars['Int']>;
  notContains?: Maybe<Scalars['Int']>;
  containsi?: Maybe<Scalars['Int']>;
  notContainsi?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  null?: Maybe<Scalars['Boolean']>;
  notNull?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  between?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FloatFilterInput = {
  and?: Maybe<Array<Maybe<Scalars['Float']>>>;
  or?: Maybe<Array<Maybe<Scalars['Float']>>>;
  not?: Maybe<FloatFilterInput>;
  eq?: Maybe<Scalars['Float']>;
  eqi?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  startsWith?: Maybe<Scalars['Float']>;
  endsWith?: Maybe<Scalars['Float']>;
  contains?: Maybe<Scalars['Float']>;
  notContains?: Maybe<Scalars['Float']>;
  containsi?: Maybe<Scalars['Float']>;
  notContainsi?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  null?: Maybe<Scalars['Boolean']>;
  notNull?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
  between?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type DateTimeFilterInput = {
  and?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  or?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  not?: Maybe<DateTimeFilterInput>;
  eq?: Maybe<Scalars['DateTime']>;
  eqi?: Maybe<Scalars['DateTime']>;
  ne?: Maybe<Scalars['DateTime']>;
  startsWith?: Maybe<Scalars['DateTime']>;
  endsWith?: Maybe<Scalars['DateTime']>;
  contains?: Maybe<Scalars['DateTime']>;
  notContains?: Maybe<Scalars['DateTime']>;
  containsi?: Maybe<Scalars['DateTime']>;
  notContainsi?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  null?: Maybe<Scalars['Boolean']>;
  notNull?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  between?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type JsonFilterInput = {
  and?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  or?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  not?: Maybe<JsonFilterInput>;
  eq?: Maybe<Scalars['JSON']>;
  eqi?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  startsWith?: Maybe<Scalars['JSON']>;
  endsWith?: Maybe<Scalars['JSON']>;
  contains?: Maybe<Scalars['JSON']>;
  notContains?: Maybe<Scalars['JSON']>;
  containsi?: Maybe<Scalars['JSON']>;
  notContainsi?: Maybe<Scalars['JSON']>;
  gt?: Maybe<Scalars['JSON']>;
  gte?: Maybe<Scalars['JSON']>;
  lt?: Maybe<Scalars['JSON']>;
  lte?: Maybe<Scalars['JSON']>;
  null?: Maybe<Scalars['Boolean']>;
  notNull?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  between?: Maybe<Array<Maybe<Scalars['JSON']>>>;
};

export type ComponentSectionsAddressSection = {
  __typename?: 'ComponentSectionsAddressSection';
  id: Scalars['ID'];
  address: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsCardsSection = {
  __typename?: 'ComponentSectionsCardsSection';
  id: Scalars['ID'];
  sectionTitle?: Maybe<Scalars['String']>;
  cards?: Maybe<Array<Maybe<ComponentSharedCard>>>;
};


export type ComponentSectionsCardsSectionCardsArgs = {
  filters?: Maybe<ComponentSharedCardFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ComponentSectionsCarouselSection = {
  __typename?: 'ComponentSectionsCarouselSection';
  id: Scalars['ID'];
  sectionTitle?: Maybe<Scalars['String']>;
  carousels?: Maybe<Array<Maybe<ComponentSharedMainCarouselItem>>>;
};


export type ComponentSectionsCarouselSectionCarouselsArgs = {
  filters?: Maybe<ComponentSharedMainCarouselItemFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ComponentSectionsContactSection = {
  __typename?: 'ComponentSectionsContactSection';
  id: Scalars['ID'];
  sectionTitle?: Maybe<Scalars['String']>;
  forms?: Maybe<Array<Maybe<ComponentSharedFormField>>>;
  submitButton?: Maybe<ComponentSharedButton>;
  requiredFieldText?: Maybe<Scalars['String']>;
  submittedFormHeader?: Maybe<Scalars['String']>;
  submittedFormDisclaimer?: Maybe<Scalars['String']>;
};


export type ComponentSectionsContactSectionFormsArgs = {
  filters?: Maybe<ComponentSharedFormFieldFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ComponentSectionsImageGallerySection = {
  __typename?: 'ComponentSectionsImageGallerySection';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  images?: Maybe<UploadFileRelationResponseCollection>;
  text?: Maybe<Scalars['String']>;
};


export type ComponentSectionsImageGallerySectionImagesArgs = {
  filters?: Maybe<UploadFileFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ComponentSectionsNoClickableImages = {
  __typename?: 'ComponentSectionsNoClickableImages';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  images?: Maybe<UploadFileRelationResponseCollection>;
};


export type ComponentSectionsNoClickableImagesImagesArgs = {
  filters?: Maybe<UploadFileFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ComponentSectionsTextSection = {
  __typename?: 'ComponentSectionsTextSection';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type ComponentSectionsTextWithImageSection = {
  __typename?: 'ComponentSectionsTextWithImageSection';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFileEntityResponse>;
  text?: Maybe<Scalars['String']>;
};

export type ComponentSharedButtonFiltersInput = {
  label?: Maybe<StringFilterInput>;
  href?: Maybe<StringFilterInput>;
  and?: Maybe<Array<Maybe<ComponentSharedButtonFiltersInput>>>;
  or?: Maybe<Array<Maybe<ComponentSharedButtonFiltersInput>>>;
  not?: Maybe<ComponentSharedButtonFiltersInput>;
};

export type ComponentSharedButtonInput = {
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
};

export type ComponentSharedButton = {
  __typename?: 'ComponentSharedButton';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
};

export type ComponentSharedCardFiltersInput = {
  title?: Maybe<StringFilterInput>;
  body?: Maybe<StringFilterInput>;
  button?: Maybe<ComponentSharedButtonFiltersInput>;
  and?: Maybe<Array<Maybe<ComponentSharedCardFiltersInput>>>;
  or?: Maybe<Array<Maybe<ComponentSharedCardFiltersInput>>>;
  not?: Maybe<ComponentSharedCardFiltersInput>;
};

export type ComponentSharedCard = {
  __typename?: 'ComponentSharedCard';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  image: UploadFileEntityResponse;
  button?: Maybe<ComponentSharedButton>;
};

export type ComponentSharedFooterSectionFiltersInput = {
  header?: Maybe<StringFilterInput>;
  links?: Maybe<ComponentSharedLinkFiltersInput>;
  and?: Maybe<Array<Maybe<ComponentSharedFooterSectionFiltersInput>>>;
  or?: Maybe<Array<Maybe<ComponentSharedFooterSectionFiltersInput>>>;
  not?: Maybe<ComponentSharedFooterSectionFiltersInput>;
};

export type ComponentSharedFooterSectionInput = {
  id?: Maybe<Scalars['ID']>;
  header?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<ComponentSharedLinkInput>>>;
};

export type ComponentSharedFooterSection = {
  __typename?: 'ComponentSharedFooterSection';
  id: Scalars['ID'];
  header?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<ComponentSharedLink>>>;
};


export type ComponentSharedFooterSectionLinksArgs = {
  filters?: Maybe<ComponentSharedLinkFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ComponentSharedFooterInput = {
  id?: Maybe<Scalars['ID']>;
  navigationTitle?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['ID']>;
  sections?: Maybe<Array<Maybe<ComponentSharedFooterSectionInput>>>;
};

export type ComponentSharedFooter = {
  __typename?: 'ComponentSharedFooter';
  id: Scalars['ID'];
  navigationTitle?: Maybe<Scalars['String']>;
  logo?: Maybe<UploadFileEntityResponse>;
  sections?: Maybe<Array<Maybe<ComponentSharedFooterSection>>>;
};


export type ComponentSharedFooterSectionsArgs = {
  filters?: Maybe<ComponentSharedFooterSectionFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ComponentSharedFormFieldFiltersInput = {
  label?: Maybe<StringFilterInput>;
  isRequired?: Maybe<BooleanFilterInput>;
  isLong?: Maybe<BooleanFilterInput>;
  minLength?: Maybe<IntFilterInput>;
  regex?: Maybe<StringFilterInput>;
  maxLength?: Maybe<IntFilterInput>;
  minTextError?: Maybe<StringFilterInput>;
  maxLengthError?: Maybe<StringFilterInput>;
  regexError?: Maybe<StringFilterInput>;
  and?: Maybe<Array<Maybe<ComponentSharedFormFieldFiltersInput>>>;
  or?: Maybe<Array<Maybe<ComponentSharedFormFieldFiltersInput>>>;
  not?: Maybe<ComponentSharedFormFieldFiltersInput>;
};

export type ComponentSharedFormField = {
  __typename?: 'ComponentSharedFormField';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  isRequired?: Maybe<Scalars['Boolean']>;
  isLong?: Maybe<Scalars['Boolean']>;
  minLength?: Maybe<Scalars['Int']>;
  regex?: Maybe<Scalars['String']>;
  maxLength?: Maybe<Scalars['Int']>;
  minTextError?: Maybe<Scalars['String']>;
  maxLengthError?: Maybe<Scalars['String']>;
  regexError?: Maybe<Scalars['String']>;
};

export enum Enum_Componentsharedlink_Target {
  Blank = 'blank'
}

export type ComponentSharedLinkFiltersInput = {
  href?: Maybe<StringFilterInput>;
  label?: Maybe<StringFilterInput>;
  target?: Maybe<StringFilterInput>;
  and?: Maybe<Array<Maybe<ComponentSharedLinkFiltersInput>>>;
  or?: Maybe<Array<Maybe<ComponentSharedLinkFiltersInput>>>;
  not?: Maybe<ComponentSharedLinkFiltersInput>;
};

export type ComponentSharedLinkInput = {
  id?: Maybe<Scalars['ID']>;
  href?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  target?: Maybe<Enum_Componentsharedlink_Target>;
};

export type ComponentSharedLink = {
  __typename?: 'ComponentSharedLink';
  id: Scalars['ID'];
  href?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  target?: Maybe<Enum_Componentsharedlink_Target>;
};

export type ComponentSharedMainCarouselItemFiltersInput = {
  header?: Maybe<StringFilterInput>;
  text?: Maybe<StringFilterInput>;
  button?: Maybe<ComponentSharedButtonFiltersInput>;
  and?: Maybe<Array<Maybe<ComponentSharedMainCarouselItemFiltersInput>>>;
  or?: Maybe<Array<Maybe<ComponentSharedMainCarouselItemFiltersInput>>>;
  not?: Maybe<ComponentSharedMainCarouselItemFiltersInput>;
};

export type ComponentSharedMainCarouselItem = {
  __typename?: 'ComponentSharedMainCarouselItem';
  id: Scalars['ID'];
  header?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  button?: Maybe<ComponentSharedButton>;
  image: UploadFileEntityResponse;
};

export type ComponentSharedNotFoundPageInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  subText?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type ComponentSharedNotFoundPage = {
  __typename?: 'ComponentSharedNotFoundPage';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  subText?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type UploadFileFiltersInput = {
  id?: Maybe<IdFilterInput>;
  name?: Maybe<StringFilterInput>;
  alternativeText?: Maybe<StringFilterInput>;
  caption?: Maybe<StringFilterInput>;
  width?: Maybe<IntFilterInput>;
  height?: Maybe<IntFilterInput>;
  formats?: Maybe<JsonFilterInput>;
  hash?: Maybe<StringFilterInput>;
  ext?: Maybe<StringFilterInput>;
  mime?: Maybe<StringFilterInput>;
  size?: Maybe<FloatFilterInput>;
  url?: Maybe<StringFilterInput>;
  previewUrl?: Maybe<StringFilterInput>;
  provider?: Maybe<StringFilterInput>;
  provider_metadata?: Maybe<JsonFilterInput>;
  folder?: Maybe<UploadFolderFiltersInput>;
  folderPath?: Maybe<StringFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<UploadFileFiltersInput>>>;
  or?: Maybe<Array<Maybe<UploadFileFiltersInput>>>;
  not?: Maybe<UploadFileFiltersInput>;
};

export type UploadFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  folder?: Maybe<Scalars['ID']>;
  folderPath?: Maybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<UploadFile>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolderFiltersInput = {
  id?: Maybe<IdFilterInput>;
  name?: Maybe<StringFilterInput>;
  pathId?: Maybe<IntFilterInput>;
  parent?: Maybe<UploadFolderFiltersInput>;
  children?: Maybe<UploadFolderFiltersInput>;
  files?: Maybe<UploadFileFiltersInput>;
  path?: Maybe<StringFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<UploadFolderFiltersInput>>>;
  or?: Maybe<Array<Maybe<UploadFolderFiltersInput>>>;
  not?: Maybe<UploadFolderFiltersInput>;
};

export type UploadFolderInput = {
  name?: Maybe<Scalars['String']>;
  pathId?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['ID']>;
  children?: Maybe<Array<Maybe<Scalars['ID']>>>;
  files?: Maybe<Array<Maybe<Scalars['ID']>>>;
  path?: Maybe<Scalars['String']>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  name: Scalars['String'];
  pathId: Scalars['Int'];
  parent?: Maybe<UploadFolderEntityResponse>;
  children?: Maybe<UploadFolderRelationResponseCollection>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  path: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: Maybe<UploadFolderFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: Maybe<UploadFileFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<UploadFolder>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type I18NLocaleFiltersInput = {
  id?: Maybe<IdFilterInput>;
  name?: Maybe<StringFilterInput>;
  code?: Maybe<StringFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<I18NLocaleFiltersInput>>>;
  or?: Maybe<Array<Maybe<I18NLocaleFiltersInput>>>;
  not?: Maybe<I18NLocaleFiltersInput>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<I18NLocale>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsPermissionFiltersInput = {
  id?: Maybe<IdFilterInput>;
  action?: Maybe<StringFilterInput>;
  role?: Maybe<UsersPermissionsRoleFiltersInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<UsersPermissionsPermissionFiltersInput>>>;
  or?: Maybe<Array<Maybe<UsersPermissionsPermissionFiltersInput>>>;
  not?: Maybe<UsersPermissionsPermissionFiltersInput>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<UsersPermissionsPermission>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRoleFiltersInput = {
  id?: Maybe<IdFilterInput>;
  name?: Maybe<StringFilterInput>;
  description?: Maybe<StringFilterInput>;
  type?: Maybe<StringFilterInput>;
  permissions?: Maybe<UsersPermissionsPermissionFiltersInput>;
  users?: Maybe<UsersPermissionsUserFiltersInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<UsersPermissionsRoleFiltersInput>>>;
  or?: Maybe<Array<Maybe<UsersPermissionsRoleFiltersInput>>>;
  not?: Maybe<UsersPermissionsRoleFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: Maybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: Maybe<UsersPermissionsUserFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  id?: Maybe<IdFilterInput>;
  username?: Maybe<StringFilterInput>;
  email?: Maybe<StringFilterInput>;
  provider?: Maybe<StringFilterInput>;
  password?: Maybe<StringFilterInput>;
  resetPasswordToken?: Maybe<StringFilterInput>;
  confirmationToken?: Maybe<StringFilterInput>;
  confirmed?: Maybe<BooleanFilterInput>;
  blocked?: Maybe<BooleanFilterInput>;
  role?: Maybe<UsersPermissionsRoleFiltersInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<UsersPermissionsUserFiltersInput>>>;
  or?: Maybe<Array<Maybe<UsersPermissionsUserFiltersInput>>>;
  not?: Maybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type NavigationAudienceFiltersInput = {
  id?: Maybe<IdFilterInput>;
  name?: Maybe<StringFilterInput>;
  key?: Maybe<StringFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<NavigationAudienceFiltersInput>>>;
  or?: Maybe<Array<Maybe<NavigationAudienceFiltersInput>>>;
  not?: Maybe<NavigationAudienceFiltersInput>;
};

export type NavigationAudienceInput = {
  name?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};

export type NavigationAudience = {
  __typename?: 'NavigationAudience';
  name: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NavigationAudienceEntity = {
  __typename?: 'NavigationAudienceEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<NavigationAudience>;
};

export type NavigationAudienceEntityResponse = {
  __typename?: 'NavigationAudienceEntityResponse';
  data?: Maybe<NavigationAudienceEntity>;
};

export type NavigationAudienceEntityResponseCollection = {
  __typename?: 'NavigationAudienceEntityResponseCollection';
  data: Array<NavigationAudienceEntity>;
  meta: ResponseCollectionMeta;
};

export type NavigationAudienceRelationResponseCollection = {
  __typename?: 'NavigationAudienceRelationResponseCollection';
  data: Array<NavigationAudienceEntity>;
};

export type NavigationNavigationFiltersInput = {
  id?: Maybe<IdFilterInput>;
  name?: Maybe<StringFilterInput>;
  slug?: Maybe<StringFilterInput>;
  visible?: Maybe<BooleanFilterInput>;
  items?: Maybe<NavigationNavigationItemFiltersInput>;
  localizations?: Maybe<NavigationNavigationFiltersInput>;
  localeCode?: Maybe<StringFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<NavigationNavigationFiltersInput>>>;
  or?: Maybe<Array<Maybe<NavigationNavigationFiltersInput>>>;
  not?: Maybe<NavigationNavigationFiltersInput>;
};

export type NavigationNavigationInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  visible?: Maybe<Scalars['Boolean']>;
  items?: Maybe<Array<Maybe<Scalars['ID']>>>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  localeCode?: Maybe<Scalars['String']>;
};

export type NavigationNavigation = {
  __typename?: 'NavigationNavigation';
  name: Scalars['String'];
  slug: Scalars['String'];
  visible?: Maybe<Scalars['Boolean']>;
  items?: Maybe<NavigationNavigationItemRelationResponseCollection>;
  localizations?: Maybe<NavigationNavigationRelationResponseCollection>;
  localeCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type NavigationNavigationItemsArgs = {
  filters?: Maybe<NavigationNavigationItemFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type NavigationNavigationLocalizationsArgs = {
  filters?: Maybe<NavigationNavigationFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type NavigationNavigationEntity = {
  __typename?: 'NavigationNavigationEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<NavigationNavigation>;
};

export type NavigationNavigationEntityResponse = {
  __typename?: 'NavigationNavigationEntityResponse';
  data?: Maybe<NavigationNavigationEntity>;
};

export type NavigationNavigationEntityResponseCollection = {
  __typename?: 'NavigationNavigationEntityResponseCollection';
  data: Array<NavigationNavigationEntity>;
  meta: ResponseCollectionMeta;
};

export type NavigationNavigationRelationResponseCollection = {
  __typename?: 'NavigationNavigationRelationResponseCollection';
  data: Array<NavigationNavigationEntity>;
};

export enum Enum_Navigationnavigationitem_Type {
  Internal = 'INTERNAL',
  External = 'EXTERNAL',
  Wrapper = 'WRAPPER'
}

export type NavigationNavigationItemFiltersInput = {
  id?: Maybe<IdFilterInput>;
  title?: Maybe<StringFilterInput>;
  type?: Maybe<StringFilterInput>;
  path?: Maybe<StringFilterInput>;
  externalPath?: Maybe<StringFilterInput>;
  uiRouterKey?: Maybe<StringFilterInput>;
  menuAttached?: Maybe<BooleanFilterInput>;
  order?: Maybe<IntFilterInput>;
  collapsed?: Maybe<BooleanFilterInput>;
  related?: Maybe<NavigationNavigationsItemsRelatedFiltersInput>;
  parent?: Maybe<NavigationNavigationItemFiltersInput>;
  master?: Maybe<NavigationNavigationFiltersInput>;
  audience?: Maybe<NavigationAudienceFiltersInput>;
  additionalFields?: Maybe<JsonFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<NavigationNavigationItemFiltersInput>>>;
  or?: Maybe<Array<Maybe<NavigationNavigationItemFiltersInput>>>;
  not?: Maybe<NavigationNavigationItemFiltersInput>;
};

export type NavigationNavigationItemInput = {
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Navigationnavigationitem_Type>;
  path?: Maybe<Scalars['String']>;
  externalPath?: Maybe<Scalars['String']>;
  uiRouterKey?: Maybe<Scalars['String']>;
  menuAttached?: Maybe<Scalars['Boolean']>;
  order?: Maybe<Scalars['Int']>;
  collapsed?: Maybe<Scalars['Boolean']>;
  related?: Maybe<Scalars['ID']>;
  parent?: Maybe<Scalars['ID']>;
  master?: Maybe<Scalars['ID']>;
  audience?: Maybe<Array<Maybe<Scalars['ID']>>>;
  additionalFields?: Maybe<Scalars['JSON']>;
};

export type NavigationNavigationItem = {
  __typename?: 'NavigationNavigationItem';
  title: Scalars['String'];
  type?: Maybe<Enum_Navigationnavigationitem_Type>;
  path?: Maybe<Scalars['String']>;
  externalPath?: Maybe<Scalars['String']>;
  uiRouterKey?: Maybe<Scalars['String']>;
  menuAttached?: Maybe<Scalars['Boolean']>;
  order?: Maybe<Scalars['Int']>;
  collapsed?: Maybe<Scalars['Boolean']>;
  related?: Maybe<NavigationNavigationsItemsRelatedEntityResponse>;
  parent?: Maybe<NavigationNavigationItemEntityResponse>;
  master?: Maybe<NavigationNavigationEntityResponse>;
  audience?: Maybe<NavigationAudienceRelationResponseCollection>;
  additionalFields?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type NavigationNavigationItemAudienceArgs = {
  filters?: Maybe<NavigationAudienceFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type NavigationNavigationItemEntity = {
  __typename?: 'NavigationNavigationItemEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<NavigationNavigationItem>;
};

export type NavigationNavigationItemEntityResponse = {
  __typename?: 'NavigationNavigationItemEntityResponse';
  data?: Maybe<NavigationNavigationItemEntity>;
};

export type NavigationNavigationItemEntityResponseCollection = {
  __typename?: 'NavigationNavigationItemEntityResponseCollection';
  data: Array<NavigationNavigationItemEntity>;
  meta: ResponseCollectionMeta;
};

export type NavigationNavigationItemRelationResponseCollection = {
  __typename?: 'NavigationNavigationItemRelationResponseCollection';
  data: Array<NavigationNavigationItemEntity>;
};

export type NavigationNavigationsItemsRelatedFiltersInput = {
  id?: Maybe<IdFilterInput>;
  related_id?: Maybe<StringFilterInput>;
  related_type?: Maybe<StringFilterInput>;
  field?: Maybe<StringFilterInput>;
  order?: Maybe<IntFilterInput>;
  master?: Maybe<StringFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<NavigationNavigationsItemsRelatedFiltersInput>>>;
  or?: Maybe<Array<Maybe<NavigationNavigationsItemsRelatedFiltersInput>>>;
  not?: Maybe<NavigationNavigationsItemsRelatedFiltersInput>;
};

export type NavigationNavigationsItemsRelatedInput = {
  related_id?: Maybe<Scalars['String']>;
  related_type?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  master?: Maybe<Scalars['String']>;
};

export type NavigationNavigationsItemsRelated = {
  __typename?: 'NavigationNavigationsItemsRelated';
  related_id: Scalars['String'];
  related_type: Scalars['String'];
  field: Scalars['String'];
  order: Scalars['Int'];
  master: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NavigationNavigationsItemsRelatedEntity = {
  __typename?: 'NavigationNavigationsItemsRelatedEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<NavigationNavigationsItemsRelated>;
};

export type NavigationNavigationsItemsRelatedEntityResponse = {
  __typename?: 'NavigationNavigationsItemsRelatedEntityResponse';
  data?: Maybe<NavigationNavigationsItemsRelatedEntity>;
};

export type NavigationNavigationsItemsRelatedEntityResponseCollection = {
  __typename?: 'NavigationNavigationsItemsRelatedEntityResponseCollection';
  data: Array<NavigationNavigationsItemsRelatedEntity>;
  meta: ResponseCollectionMeta;
};

export type GlobalInput = {
  notFound?: Maybe<ComponentSharedNotFoundPageInput>;
  footer?: Maybe<ComponentSharedFooterInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};

export type Global = {
  __typename?: 'Global';
  notFound?: Maybe<ComponentSharedNotFoundPage>;
  footer?: Maybe<ComponentSharedFooter>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  localizations?: Maybe<GlobalRelationResponseCollection>;
  locale?: Maybe<Scalars['String']>;
};


export type GlobalLocalizationsArgs = {
  publicationState?: Maybe<PublicationState>;
};

export type GlobalEntity = {
  __typename?: 'GlobalEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Global>;
};

export type GlobalEntityResponse = {
  __typename?: 'GlobalEntityResponse';
  data?: Maybe<GlobalEntity>;
};

export type GlobalRelationResponseCollection = {
  __typename?: 'GlobalRelationResponseCollection';
  data: Array<GlobalEntity>;
};

export type LogoInput = {
  Logo?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};

export type Logo = {
  __typename?: 'Logo';
  Logo: UploadFileEntityResponse;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};

export type LogoEntity = {
  __typename?: 'LogoEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Logo>;
};

export type LogoEntityResponse = {
  __typename?: 'LogoEntityResponse';
  data?: Maybe<LogoEntity>;
};

export type PageSectionsDynamicZone = ComponentSectionsCardsSection | ComponentSectionsCarouselSection | ComponentSectionsContactSection | ComponentSectionsImageGallerySection | ComponentSectionsTextSection | ComponentSectionsTextWithImageSection | ComponentSectionsAddressSection | ComponentSectionsNoClickableImages | Error;


export type PageFiltersInput = {
  id?: Maybe<IdFilterInput>;
  label?: Maybe<StringFilterInput>;
  slug?: Maybe<StringFilterInput>;
  title?: Maybe<StringFilterInput>;
  description?: Maybe<StringFilterInput>;
  subHeader?: Maybe<StringFilterInput>;
  isVisibleInNavigation?: Maybe<BooleanFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  publishedAt?: Maybe<DateTimeFilterInput>;
  localizations?: Maybe<PageFiltersInput>;
  locale?: Maybe<StringFilterInput>;
  and?: Maybe<Array<Maybe<PageFiltersInput>>>;
  or?: Maybe<Array<Maybe<PageFiltersInput>>>;
  not?: Maybe<PageFiltersInput>;
};

export type PageInput = {
  label?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  subHeader?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Scalars['PageSectionsDynamicZoneInput']>>;
  isVisibleInNavigation?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};

export type Page = {
  __typename?: 'Page';
  label: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  subHeader?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<PageSectionsDynamicZone>>>;
  isVisibleInNavigation?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  localizations?: Maybe<PageRelationResponseCollection>;
  locale?: Maybe<Scalars['String']>;
};


export type PageLocalizationsArgs = {
  filters?: Maybe<PageFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicationState?: Maybe<PublicationState>;
};

export type PageEntity = {
  __typename?: 'PageEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Page>;
};

export type PageEntityResponse = {
  __typename?: 'PageEntityResponse';
  data?: Maybe<PageEntity>;
};

export type PageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection';
  data: Array<PageEntity>;
  meta: ResponseCollectionMeta;
};

export type PageRelationResponseCollection = {
  __typename?: 'PageRelationResponseCollection';
  data: Array<PageEntity>;
};

export type SloganInput = {
  topText?: Maybe<Scalars['String']>;
  middleText?: Maybe<Scalars['String']>;
  bottomText?: Maybe<Scalars['String']>;
  CTASloganButton?: Maybe<Array<Maybe<ComponentSharedButtonInput>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};

export type Slogan = {
  __typename?: 'Slogan';
  topText?: Maybe<Scalars['String']>;
  middleText?: Maybe<Scalars['String']>;
  bottomText?: Maybe<Scalars['String']>;
  CTASloganButton?: Maybe<Array<Maybe<ComponentSharedButton>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  localizations?: Maybe<SloganRelationResponseCollection>;
  locale?: Maybe<Scalars['String']>;
};


export type SloganCtaSloganButtonArgs = {
  filters?: Maybe<ComponentSharedButtonFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type SloganLocalizationsArgs = {
  publicationState?: Maybe<PublicationState>;
};

export type SloganEntity = {
  __typename?: 'SloganEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Slogan>;
};

export type SloganEntityResponse = {
  __typename?: 'SloganEntityResponse';
  data?: Maybe<SloganEntity>;
};

export type SloganRelationResponseCollection = {
  __typename?: 'SloganRelationResponseCollection';
  data: Array<SloganEntity>;
};

export type GenericMorph = ComponentSectionsAddressSection | ComponentSectionsCardsSection | ComponentSectionsCarouselSection | ComponentSectionsContactSection | ComponentSectionsImageGallerySection | ComponentSectionsNoClickableImages | ComponentSectionsTextSection | ComponentSectionsTextWithImageSection | ComponentSharedButton | ComponentSharedCard | ComponentSharedFooterSection | ComponentSharedFooter | ComponentSharedFormField | ComponentSharedLink | ComponentSharedMainCarouselItem | ComponentSharedNotFoundPage | UploadFile | UploadFolder | I18NLocale | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | NavigationAudience | NavigationNavigation | NavigationNavigationItem | NavigationNavigationsItemsRelated | Global | Logo | Page | Slogan;

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};


export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type PaginationArg = {
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  navigationAudience?: Maybe<NavigationAudienceEntityResponse>;
  navigationAudiences?: Maybe<NavigationAudienceEntityResponseCollection>;
  navigationNavigation?: Maybe<NavigationNavigationEntityResponse>;
  navigationNavigations?: Maybe<NavigationNavigationEntityResponseCollection>;
  navigationNavigationItem?: Maybe<NavigationNavigationItemEntityResponse>;
  navigationNavigationItems?: Maybe<NavigationNavigationItemEntityResponseCollection>;
  navigationNavigationsItemsRelated?: Maybe<NavigationNavigationsItemsRelatedEntityResponse>;
  navigationNavigationsItemsRelateds?: Maybe<NavigationNavigationsItemsRelatedEntityResponseCollection>;
  global?: Maybe<GlobalEntityResponse>;
  logo?: Maybe<LogoEntityResponse>;
  page?: Maybe<PageEntityResponse>;
  pages?: Maybe<PageEntityResponseCollection>;
  slogan?: Maybe<SloganEntityResponse>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryUploadFileArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: Maybe<UploadFileFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: Maybe<UploadFolderFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: Maybe<I18NLocaleFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: Maybe<UsersPermissionsRoleFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: Maybe<UsersPermissionsUserFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryNavigationAudienceArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryNavigationAudiencesArgs = {
  filters?: Maybe<NavigationAudienceFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryNavigationNavigationArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryNavigationNavigationsArgs = {
  filters?: Maybe<NavigationNavigationFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryNavigationNavigationItemArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryNavigationNavigationItemsArgs = {
  filters?: Maybe<NavigationNavigationItemFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryNavigationNavigationsItemsRelatedArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryNavigationNavigationsItemsRelatedsArgs = {
  filters?: Maybe<NavigationNavigationsItemsRelatedFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryGlobalArgs = {
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type QueryLogoArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryPageArgs = {
  id?: Maybe<Scalars['ID']>;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type QueryPagesArgs = {
  filters?: Maybe<PageFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type QuerySloganArgs = {
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  createNavigationAudience?: Maybe<NavigationAudienceEntityResponse>;
  updateNavigationAudience?: Maybe<NavigationAudienceEntityResponse>;
  deleteNavigationAudience?: Maybe<NavigationAudienceEntityResponse>;
  createNavigationNavigation?: Maybe<NavigationNavigationEntityResponse>;
  updateNavigationNavigation?: Maybe<NavigationNavigationEntityResponse>;
  deleteNavigationNavigation?: Maybe<NavigationNavigationEntityResponse>;
  createNavigationNavigationItem?: Maybe<NavigationNavigationItemEntityResponse>;
  updateNavigationNavigationItem?: Maybe<NavigationNavigationItemEntityResponse>;
  deleteNavigationNavigationItem?: Maybe<NavigationNavigationItemEntityResponse>;
  createNavigationNavigationsItemsRelated?: Maybe<NavigationNavigationsItemsRelatedEntityResponse>;
  updateNavigationNavigationsItemsRelated?: Maybe<NavigationNavigationsItemsRelatedEntityResponse>;
  deleteNavigationNavigationsItemsRelated?: Maybe<NavigationNavigationsItemsRelatedEntityResponse>;
  updateGlobal?: Maybe<GlobalEntityResponse>;
  deleteGlobal?: Maybe<GlobalEntityResponse>;
  updateLogo?: Maybe<LogoEntityResponse>;
  deleteLogo?: Maybe<LogoEntityResponse>;
  createPage?: Maybe<PageEntityResponse>;
  updatePage?: Maybe<PageEntityResponse>;
  deletePage?: Maybe<PageEntityResponse>;
  updateSlogan?: Maybe<SloganEntityResponse>;
  deleteSlogan?: Maybe<SloganEntityResponse>;
  upload: UploadFileEntityResponse;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  updateFileInfo: UploadFileEntityResponse;
  removeFile?: Maybe<UploadFileEntityResponse>;
  createGlobalLocalization?: Maybe<GlobalEntityResponse>;
  createPageLocalization?: Maybe<PageEntityResponse>;
  createSloganLocalization?: Maybe<SloganEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  login: UsersPermissionsLoginPayload;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID'];
  data: UploadFileInput;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationUpdateUploadFolderArgs = {
  id: Scalars['ID'];
  data: UploadFolderInput;
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationCreateNavigationAudienceArgs = {
  data: NavigationAudienceInput;
};


export type MutationUpdateNavigationAudienceArgs = {
  id: Scalars['ID'];
  data: NavigationAudienceInput;
};


export type MutationDeleteNavigationAudienceArgs = {
  id: Scalars['ID'];
};


export type MutationCreateNavigationNavigationArgs = {
  data: NavigationNavigationInput;
};


export type MutationUpdateNavigationNavigationArgs = {
  id: Scalars['ID'];
  data: NavigationNavigationInput;
};


export type MutationDeleteNavigationNavigationArgs = {
  id: Scalars['ID'];
};


export type MutationCreateNavigationNavigationItemArgs = {
  data: NavigationNavigationItemInput;
};


export type MutationUpdateNavigationNavigationItemArgs = {
  id: Scalars['ID'];
  data: NavigationNavigationItemInput;
};


export type MutationDeleteNavigationNavigationItemArgs = {
  id: Scalars['ID'];
};


export type MutationCreateNavigationNavigationsItemsRelatedArgs = {
  data: NavigationNavigationsItemsRelatedInput;
};


export type MutationUpdateNavigationNavigationsItemsRelatedArgs = {
  id: Scalars['ID'];
  data: NavigationNavigationsItemsRelatedInput;
};


export type MutationDeleteNavigationNavigationsItemsRelatedArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateGlobalArgs = {
  data: GlobalInput;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteGlobalArgs = {
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateLogoArgs = {
  data: LogoInput;
};


export type MutationCreatePageArgs = {
  data: PageInput;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdatePageArgs = {
  id: Scalars['ID'];
  data: PageInput;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeletePageArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateSloganArgs = {
  data: SloganInput;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteSloganArgs = {
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  info?: Maybe<FileInfoInput>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: Maybe<FileInfoInput>;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationCreateGlobalLocalizationArgs = {
  id?: Maybe<Scalars['ID']>;
  data?: Maybe<GlobalInput>;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePageLocalizationArgs = {
  id?: Maybe<Scalars['ID']>;
  data?: Maybe<PageInput>;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateSloganLocalizationArgs = {
  id?: Maybe<Scalars['ID']>;
  data?: Maybe<SloganInput>;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
  data: UsersPermissionsRoleInput;
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationUpdateUsersPermissionsUserArgs = {
  id: Scalars['ID'];
  data: UsersPermissionsUserInput;
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};
