#Clockhands

#Write a function angle_between_hands that given the time of the day in hours
#and minutes returns the angle between the hands on a clock. It should give a positive angle and return the smaller one (ie less than 180 degrees)

  def angle_btwn_hands(hour,minute)

    angle = ((hour * 3) - (min * 5.5)).floor
    angle > 180 ? 360-angle : angle.abs
    
  end
