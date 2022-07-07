import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Payroll {
	
	public static void main(String[] args) {
		String name,deptName,empName;
		int deptCount,empCount,choice,deptCh,empId,deptId;
		double salary,bonus,compen;
		int i,j;
		List<Department>dept;
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the Organisation name");
		name=sc.nextLine();
		Organization org=new Organization(name);
		System.out.println("Enter the number of department");
		deptCount=Integer.parseInt(sc.nextLine());
		for(i=0;i<deptCount;i++) {
			System.out.println("Enter department "+(i+1)+ " name");
			deptName=sc.nextLine();
			org.addDepartment(new Department(deptName));
		}
		while(true) {
			try {
				System.out.println(".....Menu....");
				System.out.println("1. Add Department");
				System.out.println("2. Add Employee");
				System.out.println("3. Relieve Employee");
				System.out.println("4. Print Salary Slip");
				System.out.println("5. Exit");
				choice=Integer.parseInt(sc.nextLine());
				switch(choice) {
				case 1:
					System.out.println("Enter department name");
					deptName=sc.nextLine();
					org.addDepartment(new Department(deptName));
					break;
				case 2:
					dept=org.departmentList();
					System.out.println("Enter "+"Employee details");
					System.out.println("Enter "+"Employee Name");
					empName=sc.nextLine();
					System.out.println("Enter "+"Employee Salary");
					salary=Double.parseDouble(sc.nextLine());
					System.out.println("Enter "+"Employee Bonus");
					bonus=Double.parseDouble(sc.nextLine());
					System.out.println("Enter "+"Employee Compensation");
					compen=Double.parseDouble(sc.nextLine());
					Employee emp=new Employee(empName,salary,bonus,compen);
					System.out.println("Department List");
					for(i=0;i<dept.size();i++) {
						System.out.println((i+1)+". "+dept.get(i).deptName);
					}
					System.out.println("You can add employee in multiple department");
					while(true) {
						System.out.println("Select Department or enter -1 for exit ");
						deptCh=Integer.parseInt(sc.nextLine());
						if(deptCh==-1) {
							break;
						}
						dept.get(deptCh-1).join(emp);
					}
					break;
				case 3:
					System.out.println("Enter Employee Id and Department Id");
					empId=Integer.parseInt(sc.nextLine());
					deptId=Integer.parseInt(sc.nextLine());
					dept=org.departmentList();
					for(i=0;i<dept.size();i++) {
						if(dept.get(i).deptId==deptId) {
							List<Employee> deptEmp=dept.get(i).getEmployees();
							for(j=0;j<deptEmp.size();j++) {
								if(deptEmp.get(j).empId==empId) {
									deptEmp.remove(j);
									break;
								}
							}
							if(j==deptEmp.size()) {
								System.out.println("Invalid Employee ID");
							}
							
						}
					}
					if(i==dept.size()) {
						System.out.println("Invalid Department ID");
					}
					break;
				case 4:
					ArrayList<Employee> allEmp=org.employeeList();
					System.out.println(allEmp.size());
					for(i=0;i<allEmp.size();i++) {
						System.out.println(".........PaySlip...........");
						System.out.println("Id "+allEmp.get(i).empId+"   Name   "+allEmp.get(i).empName);
						System.out.println("Baisc Salary "+allEmp.get(i).basicSalary+"   Bonus    "+allEmp.get(i).bonus+"    Compensation   "+allEmp.get(i).compensation );
						double taxAmount=(allEmp.get(i).basicSalary/10);
						System.out.println("Tax Deduction "+taxAmount);
						
						
					}
					
				}
				
			}
			catch(Exception e) {
				System.out.println(e.getMessage());
				
			}
		}

		
		
	}

}
