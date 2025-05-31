const imageMap = import.meta.glob("../assets/*", {
  eager: true,
  import: "default",
});

const Carousel = ({imagePaths}) => {
  return (
    <div className="flex justify-center">
      <div className="w-3xl object-contain">
        {imagePaths.map((image, index) => {
          const imageName = imageMap[`../assets/${image}`]
          return <img src={imageName} key={index}></img>
        })}
      </div>
    </div>
  )
}

export default Carousel