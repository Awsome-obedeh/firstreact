/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
         
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
          },
        ],
      },

 
  
    //   old way of configuring nextconfig to allow images cdn
    // images:{
    //     domains:['img.freepik.com',"images.unsplash.com"]
    // }
    
};


export default nextConfig;
