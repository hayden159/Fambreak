class AddFkMembers < ActiveRecord::Migration
  def change
    add_column :creators, :member_id, :integer
  end
end
