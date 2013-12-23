Sequel.migration do
  change do
    create_table(:rabbits) do
      primary_key :id
      String :name # :required => true
      Text :description
      Integer :age
      String :colour
      DateTime :created_at
      DateTime :updated_at
    end
  end
end