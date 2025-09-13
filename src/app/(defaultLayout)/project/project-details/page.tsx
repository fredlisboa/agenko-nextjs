import BreadCumb from '../../../Components/Common/BreadCumb';
import ProjectDetails from '../../../Components/ProjectDetails/ProjectDetails';
import React from 'react';

const page = () => {
  return (
    <div>
             <BreadCumb
                Title="Project Details"
                content="Agenko empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb>   
            <ProjectDetails></ProjectDetails>       
    </div>
  );
};

export default page;