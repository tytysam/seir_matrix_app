class AddVehicleIdToVehicles < ActiveRecord::Migration[6.1]
  def change
    add_column :vehicles, :vehicle_id, :integer
  end
end
