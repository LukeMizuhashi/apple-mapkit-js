mapkit.MapRect.prototype.contains = function contains(point) {
  return this.toCoordinateRegion().contains(point);
};

mapkit.CoordinateRegion.prototype.contains = function contains(point) {
  return this.toBoundingRegion().contains(point);
};

mapkit.BoundingRegion.prototype.contains = function contains(point) {

  var thisPoint = undefined; 
  switch(true) {
    case Boolean(point.toCoordinate):
      thisPoint = point.toCoordinate();
      break;

    case Boolean(point.toMapPoint):
      thisPoint = point;
      break;

    case Boolean(point.x && point.y):
      thisPoint = new mapkit.MapPoint(point.x,point.y).toCoordinate();
      break;

    case Boolean(point.latitude && point.longitude):
      thisPoint = new mapkit.Coordinate(point.latitude,point.longitude);
      break;

    default:
      throw new Error(
        'Point must be of type mapkit.MapPoint, mapkit.Coordinate, a '
      + 'map-point literal of the form { x: Number, y: Number }, or '
      + 'a coordinate literal of form { latitude: Number, longitude: Number }'
      );
      break;
  }

  return (
    this.northLatitude >= thisPoint.latitude
 && this.eastLongitude >= thisPoint.longitude
 && this.southLatitude <= thisPoint.latitude
 && this.westLongitude <= thisPoint.longitude
  );

};

mapkit.Map.prototype.contains = function contains(point) {
  return this.region.contains(point);
};

