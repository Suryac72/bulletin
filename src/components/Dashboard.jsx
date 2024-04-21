import React from "react";
import Card from "./Card";
import { getFormattedDate } from "@/utils/utils";
import { useState } from "react";
import Container from "./Container";
import Button from "./Button";
import SearchInput from "./Search";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import noRecords from "../../public/no-records.png";
import Image from "next/image";

const Dashboard = ({ bulletins }) => {
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();
  const { register, setValue, watch } = useForm();

  const handleAddBulletin = () => {
    router.push("/bulletins/add");
  };

  // Function to handle search
  const handleSearch = async (event) => {
    try {
      setValue("query", event.target.value);
      const query = watch("query");
      const response = await fetch(
        `https://bulletin-app.vercel.app/api/search?query=${query}`
      );
      const searchResults = await response.json();
      setSearchResults(searchResults.bulletins);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="min-h-screen">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between mb-3">
          <div className="font-bold text-3xl mb-3 md:mb-0 md:mr-6">
            <h1>Bulletin App</h1>
          </div>
          <div className="md:w-1/3 mb-4 md:mb-0">
            <SearchInput
              placeHolder={"Search bulletins"}
              handleSearch={handleSearch}
              register={register}
            />
          </div>
          <Button
            title={"Add Bulletin"}
            onClick={handleAddBulletin}
            className="w-full md:w-auto"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(searchResults.length > 0 ? searchResults : bulletins)?.map(
            (post) => (
              <Card
                key={post.id}
                heading={post.title}
                date={getFormattedDate(post.creationDate)}
                description={post.description}
                imageUrl={post?.image ?? ""}
              />
            )
          )}
        </div>
      </Container>
      {searchResults.length === 0 && bulletins.length === 0 && (
              <div className="flex items-center justify-center">
                <Image src={noRecords} width={500} height={500} />
              </div>
          )}
    </div>
  );
};

export default Dashboard;
