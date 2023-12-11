import subprocess

def get_current_branch():
    try:
        result = subprocess.run(
            ["git", "rev-parse", "--abbrev-ref", "HEAD"],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            check=True
        )
        return result.stdout.strip()
    except subprocess.CalledProcessError as e:
        print(f"Error executing git command: {e}")
        print(f"Error message: {e.stderr}")
        return None
    
def has_untracked_files():
    try:
        result = subprocess.run(
            ["git", "status", "--porcelain"],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            check=True
        )
        return bool(result.stdout.strip())
    except subprocess.CalledProcessError as e:
        print(f"Error executing git command: {e}")
        print(f"Error message: {e.stderr}")
        return None
    
def show_untracked_files():
    try:
        # Run the git status command to show untracked files
        result = subprocess.run(['git', 'status', '--porcelain'], capture_output=True, text=True, check=True)

        # Extract untracked files from the command output
        lines = result.stdout.splitlines()
        untracked_files = [line[3:] for line in lines if line.startswith("??")]

        if untracked_files:
            print("Untracked files:")
            for file in untracked_files:
                print(f"- {file}")
        else:
            print("No untracked files.")

    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")
    
def git_checkout(branch):
    try:
        subprocess.run(
            ["git", "checkout", branch],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            check=True
        )
        print("Switched to the {} branch.".format(branch))
    except subprocess.CalledProcessError as e:
        print(f"Error executing git checkout command: {e}")
        print(f"Error message: {e.stderr}")

def git_pull():
    try:
        subprocess.run(
            ["git", "pull"],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            check=True
        )
        print("Git pull successful.")
    except subprocess.CalledProcessError as e:
        print(f"Error executing git pull command: {e}")
        print(f"Error message: {e.stderr}")

def git_pull_origin_master():
    try:
        # Run the git pull origin master command
        subprocess.run(['git', 'pull', 'origin', 'master'], check=True)
        print("Git pull origin master successful.")
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")

def checkout_to_master():
    ''' switch to master branch '''
    current_branch = get_current_branch()
    if current_branch == 'master':
        if has_untracked_files() == False:
            git_pull()
            print("You are already on Master Branch and has no untracked files. No need to checkout. Master is upto date")
        else:
            print("You are already on master branch and no need to check out. But, master has some untracked files. Please check once")
    else: 
        if has_untracked_files() == False:
           git_checkout("master")
           git_pull()
           print("Checkout to master branch and Master is upto date")
        else:
            print("current feature branch has some untracked files. Please commit and push them in feature branch and then do checkout to master")

def create_a_new_feature_branch():
    '''create a new feature branch'''
    feature_branch_name= input("Please provide a feature branch name you want to create: ")
    try:
        # Create a new feature branch
        subprocess.run(['git', 'checkout', '-b', feature_branch_name], check=True)
        print(f"Feature branch '{feature_branch_name}' created successfully.")
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")

def git_status():
    try:
        # Run the git status command
        result = subprocess.run(['git', 'status'], capture_output=True, text=True, check=True)

        # Print the output of the git status command
        print(result.stdout)

    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")

def git_add():
    try:
        # Run the git add command
        subprocess.run(['git', 'add', '-A'] , check=True)
        print("Files added to the staging area successfully.")

    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")

def git_commit(commit_message):
    try:
        # Run the git commit command
        subprocess.run(['git', 'commit', '-m', commit_message], check=True)
        print("Git commit successful.")

    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")

def git_push(remote='origin', branch='master'):
    try:
        # Run the git push command
        subprocess.run(['git', 'push'], check=True)
        print(f"Git push successful.")

    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")


if __name__ == "__main__":
    print('''Press the letter that corresponds to the action required below
    ------------------------------------------------------------------
    1 - checkout to master
    2 - create a new feature branch
    3 - add, commit and push changes
    4 - checkout to feature branch and update it with latest master
    5 - update master branch 
    ------------------------------------------------------------------
        ''')
    option= int(input("select your option:"))

    if option == 1:
        checkout_to_master()    
    elif option == 2:
        checkout_to_master()
        create_a_new_feature_branch()
    elif option ==3:
        if has_untracked_files() == False:
            print("No files availble for commit, already upto date")
        else:
            current_branch = get_current_branch()
            if current_branch == 'master':
                print("Do not commit or push any changes as you are in master branch")
            else: 
                print(f"You are in {current_branch} feature branch")
                option1= input(f"do you want to update {current_branch} feature branch with latest master before commiting ? if yes press y , else press Enter to continue")
                if option1 == 'y':
                    git_pull_origin_master()
                git_status()
                option2= input("Press y if all the above changes and files are to be pushed, else press Enter to continue: ")
                if option2 == 'y':
                    git_add()
                else:
                    print("correct your changes")
                git_status()
                option3= input("Press y to confirm that the correct files have been added: ")
                if option3 == 'y':
                    commit_message= input("Enter the commit message: ")
                    git_commit(commit_message)
                    option4= input("Do you want to push changes now ? if yes press y , else press Enter: ")
                    if option4 == 'y':
                        git_push()
                    else:
                        print("exiting with only commit") 
    elif option == 4:
        current_branch = get_current_branch()
        if has_untracked_files() == False:
           feature_branch= input("Provide your correct feature branch name ( recommended --> please copy from Gerrit ): ")
           git_checkout(feature_branch)
           git_pull()
           option5= input("Do you want to update feature branch to latest master , if yes press y , else press Enter: ")
           if option5 == 'y':
              git_pull_origin_master()
        else:
            print(f"your {current_branch} branch has untracked file , pleas check once")
    elif option == 5:
        current_branch = get_current_branch()
        if current_branch == 'master':  
           if has_untracked_files() == False:
               git_pull()
           else:
               print(f"{current_branch} branch has some untracked file , please remove it and then update")
        else:
            print(f"you are in {current_branch} feature branch now, please check it once")


                




                
                



        