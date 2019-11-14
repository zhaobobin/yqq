import React from 'react';

import LoadLazy from '@/components/Common/LoadLazy'
import HomeBanner from '@/containers/Home/HomeBanner';
import HomeTese from '@/containers/Home/HomeTese';
import HomeCourse from '@/containers/Home/HomeCourse';
import HomeTeachers from '@/containers/Home/HomeTeachers';
import HomeCase from '@/containers/Home/HomeCase';
import HomeAddress from '@/containers/Home/HomeAddress';

export default function Home () {

  return(

    <div>

      <LoadLazy height="700">
        <HomeBanner/>
      </LoadLazy>

      <LoadLazy height="200">
        <HomeTese/>
      </LoadLazy>

      <LoadLazy height="400">
        <HomeCourse/>
      </LoadLazy>

      <LoadLazy height="1000">
        <HomeTeachers/>
      </LoadLazy>

      <LoadLazy height="400">
        <HomeCase/>
      </LoadLazy>

      <LoadLazy height="400">
        <HomeAddress/>
      </LoadLazy>

    </div>

  )

}
