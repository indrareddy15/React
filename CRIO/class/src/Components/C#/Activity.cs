using System;

namespace GeometryExample

{
  /// <summary>
  /// Represents a 2D point in a Cartesian coordinate system.
  /// </summary>
  public class Point
  {
    /// <summary>
    /// Gets or sets the X coordinate of the point.
    /// </summary>
    public double X {
      get;
      set;
    }

    /// <summary>
    /// Gets or sets the Y coordinate of the point.
    /// </summary>
    public double Y {
      get;
      set;
    }
    /// <summary>
    /// Initializes a new instance of the <see cref="Point"/> class.
    /// </summary>
    /// <param name="x">The X coordinate of the point.</param>
    /// <param name="y">The Y coordinate of the point.</param>
    public Point(double x, double y)
    {
      X = x;
      Y = y;
    }
    /// <summary>
    /// Calculates the distance to another point.
    /// </summary>
    /// <param name="other">The other point.</param>
    /// <returns>The distance to the other point.</returns>
    
    public double DistanceTo(Point other)
    {
      return Math.Sqrt(Math.Pow(X - other.X, 2) + Math.Pow(Y - other.Y, 2));
    }
  }

  /// <summary>
  /// Contains the entry point for the program.
  /// </summary>

  class Program
  {
    /// <summary>
    /// The main entry point for the application.
    /// </summary>
    /// <param name="args">Command-line arguments.</param>
    static void Main(string[] args)
    {
      Point p1 = new Point(3, 4);
      Point p2 = new Point(0, 0);
      Console.WriteLine("Distance: " + p1.DistanceTo(p2));
    }
  }
}