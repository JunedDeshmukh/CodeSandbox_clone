import { Button } from "antd";
import { useCreateProject } from "../hooks/apis/mutations/useCreateProject"


  
 
  
export const CreateProject = () => {

    

    

    const { createProjectMutation } = useCreateProject();

    async function handleCreateProject() {
        console.log("Going to trigger the api");
        try {
            await createProjectMutation();
            console.log("Now we should redirect to the editor")
        } catch(error) {
            console.log("Error creating project", error);
        }
    }

    return (
       
                <Button
                type="primary"
                    onClick={handleCreateProject}
                >
                    Create Playground
                </Button>
          
    )
}