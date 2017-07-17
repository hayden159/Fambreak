class ChangeColumnAttribute < ActiveRecord::Migration
  def change
    rename_column :members, :attributes, :settings
  end
end
