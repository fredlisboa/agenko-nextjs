import BlogSidebar from '../../Components/BlogSidebar/BlogSidebar';
import BreadCumb from '../../Components/Common/BreadCumb';
import React from 'react';

const page = () => {
  return (
    <div>
               <BreadCumb
                Title="Blog Standard"
                content="Agenko empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb>  
            <BlogSidebar></BlogSidebar>         
    </div>
  );
};

export default page;