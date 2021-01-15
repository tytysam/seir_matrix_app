# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Character.create([
  { name: "Neo", description: "Born Thomas A. Anderson; also known as The One" },
  { name: "Trinity", description: "Computer programmer and hacker" },
  { name: "Morpheus", description: "Morpheus: God of Dreams" },
  { name: "Agent Smith", description: "AI Order Keeper" },

])

Vehicle.create([
  { name: "Nebuchadnezzar", style: "Spaceship"}
])