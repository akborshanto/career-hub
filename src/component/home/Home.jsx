import React from 'react'
import Banner from './banner/Banner'
import FeatureJobs from './FeatureJobs/FeatureJobs'
import CategoryList from './CategoryList/CategoryList'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategoryList></CategoryList>
      <FeatureJobs></FeatureJobs>
    </div>
  )
}

export default Home
