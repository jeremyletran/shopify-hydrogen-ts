import {useShop, useShopQuery, Seo} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import Layout from '../../components/Layout.server';
import NotFound from '../../components/NotFound.server';
import {PageDetailsQuery} from '../../graphql/generated';

export default function Page({params}) {
  const {languageCode} = useShop();

  const {handle} = params;
  const {data} = useShopQuery<PageDetailsQuery>({
    query: QUERY,
    variables: {language: languageCode, handle},
  });

  if (!data.pageByHandle) {
    return <NotFound response={undefined} />;
  }

  const page = data.pageByHandle;

  return (
    <Layout hero={undefined}>
      <Seo type="page" data={page} />
      <h1 className="text-2xl font-bold">{page.title}</h1>
      <div
        dangerouslySetInnerHTML={{__html: page.body}}
        className="prose mt-8"
      />
    </Layout>
  );
}

const QUERY = gql`
  query PageDetails($language: LanguageCode, $handle: String!)
  @inContext(language: $language) {
    pageByHandle(handle: $handle) {
      title
      body
      title
      seo {
        description
        title
      }
    }
  }
`;
