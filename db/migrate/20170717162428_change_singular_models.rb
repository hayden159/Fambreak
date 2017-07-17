class ChangeSingularModels < ActiveRecord::Migration
  def change
    rename_table :creator, :creators
    rename_table :user, :users
  end
end
