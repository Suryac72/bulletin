
'use client'
import Dashboard from "@/components/Dashboard";
export default function Home({data}) {
  return (
    <>
     <Dashboard bulletins={data.bulletinPosts}/>
    </>
  );
}

export const getServerSideProps = async () => {
  const query = await fetch('http://localhost:3000/api/bulletins');
  const response = await query.json();
  return {
    props: {
      data : response
    }
  }
}