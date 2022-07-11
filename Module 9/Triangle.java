package p9;

import java.util.Date;

/**
 * This class defines function of triangle.
 * 
 */
public class Triangle implements Shape {
	double side1;
	double side2;
	double side3;
	double height;
	Date date;
	Point originPoint;

	public Triangle(double side1, double side2, double side3, double height,
			Date date, Point originPoint) {
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
		this.height = height;
		this.date = date;
		this.originPoint = originPoint;
	}

	@Override
	public double getArea() {
		return (side1 * height) / 2;
	}

	@Override
	public double getPerimeter() {
		return (side1 + side2 + side3);
	}

	@Override
	public Date getTimeStamp() {
		return date;
	}

	@Override
	public Point getOrigin() {
		return originPoint;
	}

	@Override
	public boolean isPointEnclosed(Point givenPoint) {

		boolean enclosed = false;
		double base = Math.sqrt(Math.pow(side3, 2) - Math.pow(height, 2));
		Point b = new Point(originPoint.x + side1, originPoint.y);
		Point c = new Point(originPoint.x + base, originPoint.y + height);

	

		return enclosed;

	}

	@Override
	public String getShapeType() {
		return "TRIANGLE";
	}

	@Override
	public double getOriginDistance() {
		return Math.sqrt((originPoint.x - 0) * (originPoint.x - 0)
				+ (originPoint.y - 0) * (originPoint.y - 0));
	}

	
}