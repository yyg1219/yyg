### Git
> 分布式版本控制系统

> SVN 集中式版本控制系统

> Git相当于每个人的电脑上都装了一个SVN

##### 集中式vs分布式：
- 集中式（CVS及SVN）——版本控制放在中央服务器，缺点是联网后大家才能工作。
- 分布式（Git）——每个人电脑都是一个版本库，坏一台半台电脑不影响版本控制，安全性高。
### 初始化、基本操作
1. git init 初始化本地库
> 初始化后，会创建一个隐藏文件夹 .git，用来跟踪管理版本库
2. git status 查看工作区、暂存区状态
3. git add 'file name' 将工作区的文件添加到暂存区
4. git rm --cached 'file name' 移除暂存区修改
5. git commit 'file name' -m "提交日志" 将文件从暂存区移到本地库

### 日志相关

1. git log 查看历史提交日志
> 日志较多的时候，空格键翻页、b向上翻页、q退出
2. git log --pretty=oneline 每条日志在一行显示，显示全部commit id（版本号)
3. git log --oneline 每条日志在一行显示，显示简洁的commit id（版本号）
4. git reflog 查看所有分支的所有操作记录（包括已被删除的commit记录和reset操作）
> 例如执行了git reset --hard <commit id> 操作退回到之前的版本后，使用git log命令看不到已被删除的commit id，用git reflog命令则可以查看到被删除的commit id，有后悔药可以吃。

### 版本控制--时光穿梭

1. git reset --hard <commit id> 切换到版本号对应的指定版本
2. git reset --hard HEAD 强制将工作区、暂存区、本地库改为当前HEAD指针所在的版本。
3. git reset --hard HEAD^ 后退一个版本
4. git reset --hard HEAD^^ 后退两个版本
5. git reset --hard HEAD~x 后退x个版本
> git回退的速度非常快，因为在git内部有一个指向当前版本的HEAD指针，回退到某个版本，实际上是git把指针移动指向某个版本。

### 文件差异比较

1. git diff 比较工作区与暂存区的所有文件的差异
2. git diff <file name> 比较工作区与暂存区的指定文件的差异
3. git diff --cached <file name> 比较暂存区与版本库的指定文件的差异
4. git diff HEAD|HEAD^|HEAD~x|<commit id> <file name> 比较工作区跟本地库的某个版本的指定文件的差异

### 撤销修改

1. git checkout -- <file name> 将指定文件在工作区的修改全部撤销，包含两种情况
- 指定文件自修改后，还未被放到暂存区，撤销后回到和版本库一样的状态。
- 指定文件已经添加到暂存区，之后又做了修改，撤销后回到和版本库中文件的装态
> 即回到最近一次git commit或者git add的状态
2. git reset HEAD <file name> 将已添加到暂存区中的指定文件撤销修改
3. git reset --hard <commit id> 已经commit的文件  回退
4. 已推送到远程库的文件 GG

### 删除文件

1. git rm 删除指定文件
> 在文件夹或者使用命令 rm <file name> 删除后，执行 git rm <file name> 以及git commit -m "remove file" 将文件删除

> 如果删错了文件，要恢复，在文件夹或者rm命令删除的文件，可用git checkout -- <file name> 恢复；但如果已经使用git rm命令删除了，则要用git reset <file name>命令将删除的文件从git版本库拉回到暂存区，再用git checkout -- <file name> 命令将文件拉回到工作区

### 远程仓库
1. git push orignin master 把当前分支推送到远程
2. git clone 克隆远程仓库。Git支持多种协议，包括https，但ssh协议速度最快

### 分支
1. git branch -v 查看所有分支
2. git branch -b <name> | git switch -c <name>创建并切换分支
3. git branch checkout <name> | git switch <name> 切换分支
4. git branch 查看当前分支
5. git merge <name> 合并某分支到当前分支
6. git branch -d <name> 删除指定分支
> 分支为指向某个commit的一个指针，在某个分支上修改commit后，分支会自动向前移动

#### 解决冲突

#### 分支管理

#### bug分支

#### feature分支

### 标签
1. git tag <tagName> 新建标签 （默认新建在最新的commit上）
2. git tag <tagName> <commit id> 在指定commit id出打标签
3. git tag 查看所有标签 （按字母排序）
4. git show <tabName> 查看标签信息
5. git -d <tabName> 删除标签
6. git push origin <tagName> 推送某个标签到远程
7. git push origin --tags 推送所有标签到远程
8. git push origin :refs/tags/<tagName> 删除已推送到远程的标签（先本地删除 git -d <tagName>）
> 标签也是指向commit的一个指针，但不可移动，与某个commit id绑定。
> 因为标签绑定某个commit。如果这个commit既出现在master分支，又出现在dev分支，那么在这两个分支上都可以看到这个标签。
