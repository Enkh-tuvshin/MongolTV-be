"use client";

import { GetIndexListQuery, Index, useGetIndexListQuery } from "@/graphql/generated";
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

const GET_Index = gql`
  query Query($id: ID) {
    getIndex(id: $id) {
      id
      title
      completed
    }
  }
`;

const CREATE_Index = gql`
  mutation Mutation($input: IndexCreateInput!) {
    createIndex(input: $input) {
      id
      title
      completed
    }
  }
`;

export default function Home() {
  const [title, setTitle] = useState("");

  const { data, loading, error } = useGetIndexListQuery();
  const [createIndex, { data: createdData, loading: createLoading, error: createError }] = useMutation(CREATE_Index);
  const [getIndex, { data: getIndexData, loading: getIndexLoading, error: getIndexError }] = useLazyQuery(GET_Index);

  console.log({ getIndexData, getIndexLoading, getIndexError });

  if (loading) return <>Loading...</>;
  if (error) return <>{error.message}...</>;
  const { getIndexList } = data as GetIndexListQuery;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createIndex({
      variables: {
        input: {
          title,
          completed: false,
        },
      },
    });
  };

  const handleItemClick = (id: string) => {
    getIndex({
      variables: {
        id,
      },
    });
  };

  return (
    <div>
      <h1>{getIndexData?.getIndex && <>{getIndexData.getIndex.title}</>}</h1>
      <ul className="list-disc pl-5 mb-5">
        {getIndexList?.map((Index: Index) => (
          <li key={Index.id} className="cursor-pointer hover:underline" onClick={() => handleItemClick(Index.id)}>
            {Index.id}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          placeholder="Type here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn">Button</button>
      </form>
    </div>
  );
}
