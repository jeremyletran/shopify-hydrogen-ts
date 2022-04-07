/** 
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT.
 * Instead, you can edit the associated .graphql file to query for additional fields and this file will be updated when you run `yarn generate`
 */
// @ts-nocheck
export type ShopInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type ShopInfoQuery = (
  { __typename?: 'QueryRoot' }
  & { shop: (
    { __typename?: 'Shop' }
    & Pick<Shop, 'name' | 'description'>
  ) }
);

export type LayoutContentQueryVariables = Exact<{
  language?: InputMaybe<LanguageCode>;
  numCollections: Scalars['Int'];
}>;


export type LayoutContentQuery = (
  { __typename?: 'QueryRoot' }
  & { shop: (
    { __typename?: 'Shop' }
    & Pick<Shop, 'name'>
  ), collections: (
    { __typename?: 'CollectionConnection' }
    & { edges: Array<(
      { __typename?: 'CollectionEdge' }
      & { node: (
        { __typename?: 'Collection' }
        & Pick<Collection, 'description' | 'handle' | 'id' | 'title'>
        & { image?: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'altText' | 'width' | 'height'>
        )> }
      ) }
    )> }
  ), products: (
    { __typename?: 'ProductConnection' }
    & { edges: Array<(
      { __typename?: 'ProductEdge' }
      & { node: (
        { __typename?: 'Product' }
        & Pick<Product, 'handle'>
      ) }
    )> }
  ) }
);

export type NotFoundProductDetailsQueryVariables = Exact<{
  country?: InputMaybe<CountryCode>;
  language?: InputMaybe<LanguageCode>;
}>;


export type NotFoundProductDetailsQuery = (
  { __typename?: 'QueryRoot' }
  & { products: (
    { __typename?: 'ProductConnection' }
    & { edges: Array<(
      { __typename?: 'ProductEdge' }
      & { node: (
        { __typename?: 'Product' }
        & Pick<Product, 'handle' | 'id' | 'title'>
        & { variants: (
          { __typename?: 'ProductVariantConnection' }
          & { edges: Array<(
            { __typename?: 'ProductVariantEdge' }
            & { node: (
              { __typename?: 'ProductVariant' }
              & Pick<ProductVariant, 'id' | 'title' | 'availableForSale'>
              & { image?: Maybe<(
                { __typename?: 'Image' }
                & Pick<Image, 'id' | 'url' | 'altText' | 'width' | 'height'>
              )>, priceV2: (
                { __typename?: 'MoneyV2' }
                & Pick<MoneyV2, 'currencyCode' | 'amount'>
              ), compareAtPriceV2?: Maybe<(
                { __typename?: 'MoneyV2' }
                & Pick<MoneyV2, 'currencyCode' | 'amount'>
              )> }
            ) }
          )> }
        ) }
      ) }
    )> }
  ) }
);

export type WelcomeContentQueryVariables = Exact<{
  language?: InputMaybe<LanguageCode>;
}>;


export type WelcomeContentQuery = (
  { __typename?: 'QueryRoot' }
  & { shop: (
    { __typename?: 'Shop' }
    & Pick<Shop, 'name'>
  ), products: (
    { __typename?: 'ProductConnection' }
    & { edges: Array<(
      { __typename?: 'ProductEdge' }
      & { node: (
        { __typename?: 'Product' }
        & Pick<Product, 'handle'>
      ) }
    )> }
  ), collections: (
    { __typename?: 'CollectionConnection' }
    & { edges: Array<(
      { __typename?: 'CollectionEdge' }
      & { node: (
        { __typename?: 'Collection' }
        & Pick<Collection, 'handle'>
      ) }
    )> }
  ) }
);

export type CollectionDetailsQueryVariables = Exact<{
  handle: Scalars['String'];
  country?: InputMaybe<CountryCode>;
  language?: InputMaybe<LanguageCode>;
  numProducts: Scalars['Int'];
}>;


export type CollectionDetailsQuery = (
  { __typename?: 'QueryRoot' }
  & { collection?: Maybe<(
    { __typename?: 'Collection' }
    & Pick<Collection, 'title' | 'descriptionHtml' | 'description'>
    & { seo: (
      { __typename?: 'SEO' }
      & Pick<Seo, 'description' | 'title'>
    ), image?: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'id' | 'url' | 'width' | 'height' | 'altText'>
    )>, products: (
      { __typename?: 'ProductConnection' }
      & { edges: Array<(
        { __typename?: 'ProductEdge' }
        & { node: (
          { __typename?: 'Product' }
          & Pick<Product, 'title' | 'vendor' | 'handle' | 'descriptionHtml'>
          & { compareAtPriceRange: (
            { __typename?: 'ProductPriceRange' }
            & { maxVariantPrice: (
              { __typename?: 'MoneyV2' }
              & Pick<MoneyV2, 'currencyCode' | 'amount'>
            ), minVariantPrice: (
              { __typename?: 'MoneyV2' }
              & Pick<MoneyV2, 'currencyCode' | 'amount'>
            ) }
          ), variants: (
            { __typename?: 'ProductVariantConnection' }
            & { edges: Array<(
              { __typename?: 'ProductVariantEdge' }
              & { node: (
                { __typename?: 'ProductVariant' }
                & Pick<ProductVariant, 'id' | 'title' | 'availableForSale'>
                & { image?: Maybe<(
                  { __typename?: 'Image' }
                  & Pick<Image, 'id' | 'url' | 'altText' | 'width' | 'height'>
                )>, priceV2: (
                  { __typename?: 'MoneyV2' }
                  & Pick<MoneyV2, 'currencyCode' | 'amount'>
                ), compareAtPriceV2?: Maybe<(
                  { __typename?: 'MoneyV2' }
                  & Pick<MoneyV2, 'currencyCode' | 'amount'>
                )> }
              ) }
            )> }
          ) }
        ) }
      )>, pageInfo: (
        { __typename?: 'PageInfo' }
        & Pick<PageInfo, 'hasNextPage'>
      ) }
    ) }
  )> }
);

export type HomeShopInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeShopInfoQuery = (
  { __typename?: 'QueryRoot' }
  & { shop: (
    { __typename?: 'Shop' }
    & Pick<Shop, 'description'>
  ) }
);

export type IndexContentQueryVariables = Exact<{
  country?: InputMaybe<CountryCode>;
  language?: InputMaybe<LanguageCode>;
}>;


export type IndexContentQuery = (
  { __typename?: 'QueryRoot' }
  & { collections: (
    { __typename?: 'CollectionConnection' }
    & { edges: Array<(
      { __typename?: 'CollectionEdge' }
      & { node: (
        { __typename?: 'Collection' }
        & Pick<Collection, 'handle' | 'id' | 'title'>
        & { image?: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'altText' | 'width' | 'height'>
        )>, products: (
          { __typename?: 'ProductConnection' }
          & { edges: Array<(
            { __typename?: 'ProductEdge' }
            & { node: (
              { __typename?: 'Product' }
              & Pick<Product, 'handle' | 'id' | 'title'>
              & { variants: (
                { __typename?: 'ProductVariantConnection' }
                & { edges: Array<(
                  { __typename?: 'ProductVariantEdge' }
                  & { node: (
                    { __typename?: 'ProductVariant' }
                    & Pick<ProductVariant, 'id' | 'title' | 'availableForSale'>
                    & { image?: Maybe<(
                      { __typename?: 'Image' }
                      & Pick<Image, 'id' | 'url' | 'altText' | 'width' | 'height'>
                    )>, priceV2: (
                      { __typename?: 'MoneyV2' }
                      & Pick<MoneyV2, 'currencyCode' | 'amount'>
                    ), compareAtPriceV2?: Maybe<(
                      { __typename?: 'MoneyV2' }
                      & Pick<MoneyV2, 'currencyCode' | 'amount'>
                    )> }
                  ) }
                )> }
              ) }
            ) }
          )> }
        ) }
      ) }
    )> }
  ) }
);

export type PageDetailsQueryVariables = Exact<{
  language?: InputMaybe<LanguageCode>;
  handle: Scalars['String'];
}>;


export type PageDetailsQuery = (
  { __typename?: 'QueryRoot' }
  & { pageByHandle?: Maybe<(
    { __typename?: 'Page' }
    & Pick<Page, 'title' | 'body'>
    & { seo?: Maybe<(
      { __typename?: 'SEO' }
      & Pick<Seo, 'description' | 'title'>
    )> }
  )> }
);

export type SitemapsQueryVariables = Exact<{
  urlLimits?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<LanguageCode>;
}>;


export type SitemapsQuery = (
  { __typename?: 'QueryRoot' }
  & { products: (
    { __typename?: 'ProductConnection' }
    & { edges: Array<(
      { __typename?: 'ProductEdge' }
      & { node: (
        { __typename?: 'Product' }
        & Pick<Product, 'updatedAt' | 'handle' | 'onlineStoreUrl' | 'title'>
        & { featuredImage?: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'url' | 'altText'>
        )> }
      ) }
    )> }
  ), collections: (
    { __typename?: 'CollectionConnection' }
    & { edges: Array<(
      { __typename?: 'CollectionEdge' }
      & { node: (
        { __typename?: 'Collection' }
        & Pick<Collection, 'updatedAt' | 'handle' | 'onlineStoreUrl'>
      ) }
    )> }
  ), pages: (
    { __typename?: 'PageConnection' }
    & { edges: Array<(
      { __typename?: 'PageEdge' }
      & { node: (
        { __typename?: 'Page' }
        & Pick<Page, 'updatedAt' | 'handle' | 'onlineStoreUrl'>
      ) }
    )> }
  ) }
);
