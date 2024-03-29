import React from 'react';

type PageTitleProps  = {
    title: String | null ,
    subTitle: String | null
}
const PageTitle: React.FC<PageTitleProps> = (props) => {
    return (
            <div className="page-title">
                <h3> {props.title} </h3>
                <span className="sub-title"> SpeedLanka / Admin</span>
            </div>


    );
};

export default PageTitle;