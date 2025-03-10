import React from "react";
import { useLoaderData } from "react-router-dom";

// just an easy way to display images.

export const CDNLoader = async ({ params }: any) => {
  return {
    url: `https://x.olykir.dev/${params.id}`,
  };
};

export default function CDN() {
  const { url } = useLoaderData() as {
    url: string;
  };

  return (
    <div>
      {(() => {
        return <img src={url} alt={url} />;
      })()}
    </div>
  );
}
