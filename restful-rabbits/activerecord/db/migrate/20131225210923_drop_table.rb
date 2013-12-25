class DropTable < ActiveRecord::Migration
  def up
    drop_table :rabbits
  end

  def down
    create_table :rabbits
  end
end
