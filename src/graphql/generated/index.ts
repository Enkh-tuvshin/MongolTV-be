import { GraphQLResolveInfo } from "graphql";
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Mutation = {
  __typename?: "Mutation";
  createIndex: Index;
  createIndexCategory?: Maybe<IndexCategory>;
  deleteIndex?: Maybe<Index>;
  deleteIndexCategory?: Maybe<Index>;
  updateIndex: Index;
  updateIndexCategory?: Maybe<IndexCategory>;
};

export type MutationCreateIndexArgs = {
  input: IndexCreateInput;
};

export type MutationCreateIndexCategoryArgs = {
  input: IndexCategoryCreateInput;
};

export type MutationDeleteIndexArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteIndexCategoryArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateIndexArgs = {
  input: IndexUpdateInput;
};

export type MutationUpdateIndexCategoryArgs = {
  input: IndexCategoryUpdateInput;
};

export type Query = {
  __typename?: "Query";
  getCategories?: Maybe<Array<Maybe<Index>>>;
  getCategory?: Maybe<Index>;
  getIndex?: Maybe<Index>;
  getIndexList: Array<Index>;
};

export type QueryGetCategoryArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryGetIndexArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type Index = {
  __typename?: "Index";
  category?: Maybe<IndexCategory>;
  completed: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  title: Scalars["String"]["output"];
};

export type IndexCategory = {
  __typename?: "IndexCategory";
  id: Scalars["ID"]["output"];
  title: Scalars["String"]["output"];
};

export type IndexCategoryCreateInput = {
  title: Scalars["String"]["input"];
};

export type IndexCategoryUpdateInput = {
  id: Scalars["ID"]["input"];
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type IndexCreateInput = {
  categoryId?: InputMaybe<Scalars["ID"]["input"]>;
  completed: Scalars["Boolean"]["input"];
  title: Scalars["String"]["input"];
};

export type IndexUpdateInput = {
  categoryId?: InputMaybe<Scalars["ID"]["input"]>;
  completed?: InputMaybe<Scalars["Boolean"]["input"]>;
  id: Scalars["ID"]["input"];
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  Index: ResolverTypeWrapper<Index>;
  IndexCategory: ResolverTypeWrapper<IndexCategory>;
  IndexCategoryCreateInput: IndexCategoryCreateInput;
  IndexCategoryUpdateInput: IndexCategoryUpdateInput;
  IndexCreateInput: IndexCreateInput;
  IndexUpdateInput: IndexUpdateInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"]["output"];
  ID: Scalars["ID"]["output"];
  Mutation: {};
  Query: {};
  String: Scalars["String"]["output"];
  Index: Index;
  IndexCategory: IndexCategory;
  IndexCategoryCreateInput: IndexCategoryCreateInput;
  IndexCategoryUpdateInput: IndexCategoryUpdateInput;
  IndexCreateInput: IndexCreateInput;
  IndexUpdateInput: IndexUpdateInput;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  createIndex?: Resolver<
    ResolversTypes["Index"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateIndexArgs, "input">
  >;
  createIndexCategory?: Resolver<
    Maybe<ResolversTypes["IndexCategory"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateIndexCategoryArgs, "input">
  >;
  deleteIndex?: Resolver<
    Maybe<ResolversTypes["Index"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteIndexArgs, "id">
  >;
  deleteIndexCategory?: Resolver<
    Maybe<ResolversTypes["Index"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteIndexCategoryArgs, "id">
  >;
  updateIndex?: Resolver<
    ResolversTypes["Index"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateIndexArgs, "input">
  >;
  updateIndexCategory?: Resolver<
    Maybe<ResolversTypes["IndexCategory"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateIndexCategoryArgs, "input">
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  getCategories?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Index"]>>>,
    ParentType,
    ContextType
  >;
  getCategory?: Resolver<
    Maybe<ResolversTypes["Index"]>,
    ParentType,
    ContextType,
    Partial<QueryGetCategoryArgs>
  >;
  getIndex?: Resolver<
    Maybe<ResolversTypes["Index"]>,
    ParentType,
    ContextType,
    Partial<QueryGetIndexArgs>
  >;
  getIndexList?: Resolver<
    Array<ResolversTypes["Index"]>,
    ParentType,
    ContextType
  >;
};

export type IndexResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Index"] = ResolversParentTypes["Index"]
> = {
  category?: Resolver<
    Maybe<ResolversTypes["IndexCategory"]>,
    ParentType,
    ContextType
  >;
  completed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IndexCategoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["IndexCategory"] = ResolversParentTypes["IndexCategory"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Index?: IndexResolvers<ContextType>;
  IndexCategory?: IndexCategoryResolvers<ContextType>;
};

export type IndexFieldsFragment = {
  __typename?: "Index";
  id: string;
  title: string;
  completed: boolean;
};

export type GetIndexListQueryVariables = Exact<{ [key: string]: never }>;

export type GetIndexListQuery = {
  __typename?: "Query";
  getIndexList: Array<{
    __typename?: "Index";
    id: string;
    title: string;
    completed: boolean;
  }>;
};

export type GetIndexQueryVariables = Exact<{
  getIndexId?: InputMaybe<Scalars["ID"]["input"]>;
}>;

export type GetIndexQuery = {
  __typename?: "Query";
  getIndex?: {
    __typename?: "Index";
    id: string;
    title: string;
    completed: boolean;
  } | null;
};

export type CreateIndexMutationVariables = Exact<{
  input: IndexCreateInput;
}>;

export type CreateIndexMutation = {
  __typename?: "Mutation";
  createIndex: {
    __typename?: "Index";
    id: string;
    title: string;
    completed: boolean;
  };
};

export type DeleteIndexMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type DeleteIndexMutation = {
  __typename?: "Mutation";
  deleteIndex?: {
    __typename?: "Index";
    id: string;
    title: string;
    completed: boolean;
  } | null;
};

export type UpdateIndexMutationVariables = Exact<{
  input: IndexUpdateInput;
}>;

export type UpdateIndexMutation = {
  __typename?: "Mutation";
  updateIndex: {
    __typename?: "Index";
    id: string;
    title: string;
    completed: boolean;
  };
};

export const IndexFieldsFragmentDoc = gql`
  fragment IndexFields on Index {
    id
    title
    completed
  }
`;
export const GetIndexListDocument = gql`
  query GetIndexList {
    getIndexList {
      ...IndexFields
    }
  }
  ${IndexFieldsFragmentDoc}
`;

/**
 * __useGetIndexListQuery__
 *
 * To run a query within a React component, call `useGetIndexListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIndexListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIndexListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetIndexListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetIndexListQuery,
    GetIndexListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetIndexListQuery, GetIndexListQueryVariables>(
    GetIndexListDocument,
    options
  );
}
export function useGetIndexListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetIndexListQuery,
    GetIndexListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetIndexListQuery, GetIndexListQueryVariables>(
    GetIndexListDocument,
    options
  );
}
export function useGetIndexListSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetIndexListQuery,
    GetIndexListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetIndexListQuery, GetIndexListQueryVariables>(
    GetIndexListDocument,
    options
  );
}
export type GetIndexListQueryHookResult = ReturnType<typeof useGetIndexListQuery>;
export type GetIndexListLazyQueryHookResult = ReturnType<
  typeof useGetIndexListLazyQuery
>;
export type GetIndexListSuspenseQueryHookResult = ReturnType<
  typeof useGetIndexListSuspenseQuery
>;
export type GetIndexListQueryResult = Apollo.QueryResult<
  GetIndexListQuery,
  GetIndexListQueryVariables
>;
export const GetIndexDocument = gql`
  query GetIndex($getIndexId: ID) {
    getIndex(id: $getIndexId) {
      ...IndexFields
    }
  }
  ${IndexFieldsFragmentDoc}
`;

/**
 * __useGetIndexQuery__
 *
 * To run a query within a React component, call `useGetIndexQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIndexQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIndexQuery({
 *   variables: {
 *      getIndexId: // value for 'getIndexId'
 *   },
 * });
 */
export function useGetIndexQuery(
  baseOptions?: Apollo.QueryHookOptions<GetIndexQuery, GetIndexQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetIndexQuery, GetIndexQueryVariables>(
    GetIndexDocument,
    options
  );
}
export function useGetIndexLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetIndexQuery, GetIndexQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetIndexQuery, GetIndexQueryVariables>(
    GetIndexDocument,
    options
  );
}
export function useGetIndexSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetIndexQuery,
    GetIndexQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetIndexQuery, GetIndexQueryVariables>(
    GetIndexDocument,
    options
  );
}
export type GetIndexQueryHookResult = ReturnType<typeof useGetIndexQuery>;
export type GetIndexLazyQueryHookResult = ReturnType<typeof useGetIndexLazyQuery>;
export type GetIndexSuspenseQueryHookResult = ReturnType<
  typeof useGetIndexSuspenseQuery
>;
export type GetIndexQueryResult = Apollo.QueryResult<
  GetIndexQuery,
  GetIndexQueryVariables
>;
export const CreateIndexDocument = gql`
  mutation CreateIndex($input: IndexCreateInput!) {
    createIndex(input: $input) {
      ...IndexFields
    }
  }
  ${IndexFieldsFragmentDoc}
`;
export type CreateIndexMutationFn = Apollo.MutationFunction<
  CreateIndexMutation,
  CreateIndexMutationVariables
>;

/**
 * __useCreateIndexMutation__
 *
 * To run a mutation, you first call `useCreateIndexMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateIndexMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIndexMutation, { data, loading, error }] = useCreateIndexMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateIndexMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateIndexMutation,
    CreateIndexMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateIndexMutation, CreateIndexMutationVariables>(
    CreateIndexDocument,
    options
  );
}
export type CreateIndexMutationHookResult = ReturnType<
  typeof useCreateIndexMutation
>;
export type CreateIndexMutationResult =
  Apollo.MutationResult<CreateIndexMutation>;
export type CreateIndexMutationOptions = Apollo.BaseMutationOptions<
  CreateIndexMutation,
  CreateIndexMutationVariables
>;
export const DeleteIndexDocument = gql`
  mutation DeleteIndex($id: ID!) {
    deleteIndex(id: $id) {
      ...IndexFields
    }
  }
  ${IndexFieldsFragmentDoc}
`;
export type DeleteIndexMutationFn = Apollo.MutationFunction<
  DeleteIndexMutation,
  DeleteIndexMutationVariables
>;

/**
 * __useDeleteIndexMutation__
 *
 * To run a mutation, you first call `useDeleteIndexMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteIndexMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteIndexMutation, { data, loading, error }] = useDeleteIndexMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteIndexMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteIndexMutation,
    DeleteIndexMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteIndexMutation, DeleteIndexMutationVariables>(
    DeleteIndexDocument,
    options
  );
}
export type DeleteIndexMutationHookResult = ReturnType<
  typeof useDeleteIndexMutation
>;
export type DeleteIndexMutationResult =
  Apollo.MutationResult<DeleteIndexMutation>;
export type DeleteIndexMutationOptions = Apollo.BaseMutationOptions<
  DeleteIndexMutation,
  DeleteIndexMutationVariables
>;
export const UpdateIndexDocument = gql`
  mutation UpdateIndex($input: IndexUpdateInput!) {
    updateIndex(input: $input) {
      id
      title
      completed
    }
  }
`;
export type UpdateIndexMutationFn = Apollo.MutationFunction<
  UpdateIndexMutation,
  UpdateIndexMutationVariables
>;

/**
 * __useUpdateIndexMutation__
 *
 * To run a mutation, you first call `useUpdateIndexMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIndexMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIndexMutation, { data, loading, error }] = useUpdateIndexMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateIndexMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateIndexMutation,
    UpdateIndexMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateIndexMutation, UpdateIndexMutationVariables>(
    UpdateIndexDocument,
    options
  );
}
export type UpdateIndexMutationHookResult = ReturnType<
  typeof useUpdateIndexMutation
>;
export type UpdateIndexMutationResult =
  Apollo.MutationResult<UpdateIndexMutation>;
export type UpdateIndexMutationOptions = Apollo.BaseMutationOptions<
  UpdateIndexMutation,
  UpdateIndexMutationVariables
>;
