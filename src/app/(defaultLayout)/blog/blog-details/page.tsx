import BlogDetails from '../../../Components/BlogDetails/BlogDetails';
import BreadCumb from '../../../Components/Common/BreadCumb';
import React from 'react';

const page = () => {
  return (
    <div>
              <BreadCumb
                Title="Blog Details"
                content="Agenko empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb> 
            <BlogDetails></BlogDetails>       
    </div>
  );
};

export default page;