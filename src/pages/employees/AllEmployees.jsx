import {
  EmployeesContainer,
  AllEmployeesContainer,
  ListLayout
} from "./employees.style";
import EmployeesData from "./data";
import EmployeeList from "../../components/lists/employeeList/EmployeeListBox";

const AllEmployees = () => {
  return (
    <EmployeesContainer>
<<<<<<< HEAD
      <AllEmployeesContainer>
        <ListLayout>
          <EmployeeList data={EmployeesData} />
        </ListLayout>
=======
      <div className="top">
        <h4>
          <Link to="/dashboard">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.41 7.66L14 6.25L8 12.25L14 18.25L15.41 16.84L10.83 12.25L15.41 7.66Z"
                fill="black"
              />
            </svg>
            All Employees
          </Link>
        </h4>
        <div id="toggle">
          <ToggleBtn Click={handleGridClick} isGrid={isGrid} />
        </div>
        <Link to="/dashboard/employees/create" id="createBtn" type="button">
          Create Employee
        </Link>
      </div>
      <AllEmployeesContainer isGrid={isGrid}>
        {isGrid ? (
          <GridLayout>
            <EmployeeGrid data={EmployeesData} />
          </GridLayout>
        ) : (
          <ListLayout>
            <EmployeeList headers={HEADERS} data={EmployeesData} />
          </ListLayout>
        )}
>>>>>>> 14d6379381bac47d8da474cdb3c7db6c29d690f5
      </AllEmployeesContainer>
    </EmployeesContainer>
  );
};

export default AllEmployees;
