{
  //
  // Define types of circle and rectangle
  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  // union
  type Shape = Circle | Rectangle;

  function calculateShapeArea(shape: Shape): number {
    // console.log(shape.shape);
    if (shape.shape === "circle") {
      return Math.PI * Math.pow(shape.radius, 2);
    } else if (shape.shape == "rectangle") {
      // console.log(shape.shape);
      return shape.width * shape.height;
    } else {
      // console.log(shape.shape);
      throw new Error("Invalid shape type");
    }
    return 0;
  }
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 }).toFixed(
    2
  );
  console.log(circleArea);
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(rectangleArea);
  //
}
