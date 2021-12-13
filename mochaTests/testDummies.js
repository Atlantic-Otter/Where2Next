module.exports = {
  userWithoutItinerary: {
    email: 'elliotL@gmail.com',
    username: 'Ellito',
    password: 'Bees'
  },

  userWithItinerary: {
    email: 'adamJreact@gmail.com',
    username: 'AdamJ',
    password: 'FieldCouch',
    upcomingTrips: [{
      destination: 'Luxembourg',
      events: [{
        name: 'Really Exciting Event',
        imageURL: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fphotoshopbattles%2Fcomments%2F1mc892%2Fsilly_dog_face%2F&psig=AOvVaw15wBSThVA7uToQxhjDAOZG&ust=1639175110770000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJikxKPh1_QCFQAAAAAdAAAAABAG',
        startTime: '01-01-2022'
      }]
    }],
    flights: [{
      to: 'CrazyPlace',
      from: 'SanePlace'
    }],
    lodging: 'I am lodging'
  },

  duplicateEmail: {
    username: 'newPerson',
    password: 'newPassword',
    email: 'duplicate@gmail.com'
  },

  duplicateUsername: {
    username: 'someUser',
    password: 'HiFromSF',
    email: 'egg@gmail.com'
  },

  duplicatePassword: {
    username: 'Charles_Arduino_weaponry',
    password: 'memory',
    email: 'stylemaster@gmail.com'
  }

};

