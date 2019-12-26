<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <script>
        class Shape {
            constructor(type, color) {
                this.type = type;
                this.color = color;

            }
        }

        let circle = new Shape("circle", "red")
        let square = new Shape("square", "blue")
        circle.radius = 3;
        square.edgeLength = 5;


        square.calcArea = (edgeLength)=> {
            let area = edgeLength * edgeLength;
            console.log(area);
        }
        square.calcArea2 = (edgeLength)=> {
            let area = edgeLength * edgeLength;
            console.log(area);
        }
        circle.calcArea = (radius)=> {
            let area = 3.14 * radius*radius;
            console.log(area);
        }

        let calcShapeArea = (shape) =>{
            if (shape.type === "circle")
            {
                shape.calcArea(shape.radius);
            }
            if (shape.type === "square")
            {
                shape.calcArea(shape.edgeLength);
            }

        }
        calcShapeArea(square);
        calcShapeArea(circle);

 
  

    </script>
</body>

</html>