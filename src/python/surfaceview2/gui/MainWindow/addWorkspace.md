<!-- This file was automatically generated by jinjaroot. Do not edit directly. -->
To add a workspace, run the following Python script on the computer where the backend provider is running:

```python
import surfaceview2

# replace "new-workspace" with the name of the new workspace
new_workspace_name = 'new-workspace'

workspace_list = surfaceview2.WorkspaceList(backend_uri='{backendUri}')
new_workspace = surfaceview2.create_workspace()
workspace_list.add_workspace(name=new_workspace_name, workspace=new_workspace)
```