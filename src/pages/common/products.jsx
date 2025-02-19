import React from 'react';
import '../../styles/products.css';


const MainLayout = () => {

  const handleDownload = () => {
    const fileUrl = '../../../public/assets/data/Bank_Churn.csv';

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Bank_Churn.csv';
    link.click();
  }

  const handlePreview = () => {
    window.open(fileUrl, '_blank');
  };

  return (
    <main className='main-wrapper relative overflow-hidden'>
    <div className="product-container global-container">
      <div className='left-side'>
          <h1 className='h1-title'>Astra-5Q-TH/</h1>
          <p className='mt-5'>Account information for 10,000 customers at a European bank, including details on their credit score, balance, products, and whether they have churned.

                the Bank_Churn_Messy.xslx file is included for those completing the Bank Customer Data Prep guided project </p>

          <div className='image-data mt-10'>
            <img src='../../../public/assets/images/18134.jpg' alt='data'/>
          </div>
        
        
      </div>
      <div className='right-side'>
        <div className='download-data'>
          <button className='tag mt-5' onClick={handleDownload}>Download</button>

        </div>
        <div className='preview-data'>
          <button className='tag mt-5' onClick={handlePreview}> Preview</button>
        </div>

        <div className='file-type-data'>
          <span><h1 className='h3-title mt-5'>File type</h1></span>
          <span><p className='text-sm mt-5'>Json</p></span>
        </div>
        </div>
      
    </div>  

      
    </main>
  );
};

export default MainLayout;
