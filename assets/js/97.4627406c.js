(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{405:function(t,e,v){"use strict";v.r(e);var i=v(6),s=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git init")]),t._v(" 初始化git仓库")]),t._v(" "),e("li",[e("code",[t._v("git clone")]),t._v(" 克隆git仓库")]),t._v(" "),e("li",[e("code",[t._v("git remote add origin ***.git")]),t._v(" 添加一个新的远程残酷")]),t._v(" "),e("li",[e("code",[t._v("git push -u origin master")]),t._v(" 本地的 master 分支推送到 origin 主机的 master 分支。")]),t._v(" "),e("li",[t._v("推送到远程仓库的dev分支："),e("code",[t._v("git push origin dev")])]),t._v(" "),e("li",[e("code",[t._v("git log")]),t._v(" 查看提交历史")]),t._v(" "),e("li",[e("code",[t._v("git log --graph --pretty=oneline --abbrev-commit")])]),t._v(" "),e("li",[e("code",[t._v("git status")]),t._v(" 显示显示工作目录和暂存区的状态")]),t._v(" "),e("li",[e("code",[t._v("git diff")]),t._v(" 比较文件在暂存区和工作区的差异")]),t._v(" "),e("li",[e("code",[t._v("git add *")]),t._v(" 把所有的内容都加到缓存区")]),t._v(" "),e("li",[e("code",[t._v('git commit -m "message"')]),t._v(" git提交代码，并假设提交信息")]),t._v(" "),e("li",[t._v("commit之后又改了一个小bug，但是又不想增加一个commit，可以用："),e("code",[t._v("git commit --amend --no-edit")]),t._v("，直接将改动添加到上一次的commit中")]),t._v(" "),e("li",[e("code",[t._v("git push")]),t._v(" 把本地的分支推到远程仓库")]),t._v(" "),e("li",[e("code",[t._v("git pull")]),t._v(" 拉取最新的git代码")]),t._v(" "),e("li",[e("code",[t._v("touch .gitignore")]),t._v(" 创建一个.gitignore文件")])]),t._v(" "),e("h2",{attrs:{id:"git标签管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git标签管理"}},[t._v("#")]),t._v(" git标签管理")]),t._v(" "),e("ul",[e("li",[t._v("首先切换到需要打标签的分支上，然后使用"),e("code",[t._v("git tag v1.0")]),t._v("就可以在当前commit打上v1.0的标签")]),t._v(" "),e("li",[e("code",[t._v("git tag v1.0 commitID")]),t._v(" 对特定commit打标签")]),t._v(" "),e("li",[t._v("打标签时加上message："),e("code",[t._v('git tag -a <tagname> -m "message"')])]),t._v(" "),e("li",[e("code",[t._v("git tag")]),t._v(" 查看所有标签")]),t._v(" "),e("li",[e("code",[t._v("git show [tagname]")]),t._v(" 查看标签详细信息")]),t._v(" "),e("li",[e("code",[t._v("git push origin <tagname>")]),t._v("可以推送一个本地标签到远程仓库")]),t._v(" "),e("li",[e("code",[t._v("git push origin --tags")]),t._v("可以推送全部未推送过的本地标签")]),t._v(" "),e("li",[e("code",[t._v("git tag -d <tagname>")]),t._v("可以删除一个本地标签")]),t._v(" "),e("li",[e("code",[t._v("git push origin :refs/tags/<tagname>")]),t._v("可以删除一个远程标签（先从本地删除）")])]),t._v(" "),e("h2",{attrs:{id:"git撤销与回滚"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git撤销与回滚"}},[t._v("#")]),t._v(" Git撤销与回滚")]),t._v(" "),e("p",[t._v("reset用于回滚，revert用于撤销。")]),t._v(" "),e("p",[e("strong",[t._v("Git进行回滚")])]),t._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("使用git log命令，查看分支提交历史，确认需要回退的版本\n使用git reset --hard commit_id命令，进行版本回退\n使用git push origin命令，推送至远程分支\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("快捷命令：")]),t._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("回退上个版本：git reset --hard HEAD^ \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("【注：HEAD是指向当前版本的指针，HEAD^表示上个版本,HEAD^^表示上上个版本】")]),t._v(" "),e("p",[t._v("如果修改到的文件比较少，我们可以不通过命令回滚的方式，手动删除之前的修改，再进行提交。")]),t._v(" "),e("p",[e("strong",[t._v("Git进行撤销")])]),t._v(" "),e("p",[t._v("一些时候，为了验证Bug，我们可能会直接在测试服务器上打断点调试。如果忘记去掉调试内容，在执行git pull更新时，Git会提示你提交修改。")]),t._v(" "),e("p",[t._v("此时，你可能已经不记得修改什么了，这个时候，我们可以用git checkout -- file命令，来清空工作区的修改。是的，git checkout命令不仅可以用来切换分支，还能撤销文件修改。")]),t._v(" "),e("p",[t._v("如果想要撤销提交到暂存区后的文件内容怎么办呢(即执行git add之后)，我们可以使用git reset HEAD file命令撤销提交到暂存区的内容,再使用git checkout -- file命令来撤销工作区的修改，需要分两步进行操作。")]),t._v(" "),e("p",[e("strong",[t._v("reset还是revert?")])]),t._v(" "),e("p",[t._v('reset和revert都可以用来回滚代码。但他们是有区别的，准确来说，reset是用来"回退"版本，而revert是用来"还原"某次或者某几次提交。')]),t._v(" "),e("p",[t._v("比如我们有四次修改历史")]),t._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("42eae13 (HEAD -> master) 第四次修改\n97ea0f9 第三次修改\ne50b7c2 第二次修改\n3a52650 第一次修改\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("如果发现，在第四次修改有错误，需要回滚到第三次修改，就可以用reset命令来回退。")]),t._v(" "),e("p",[t._v("执行 git reset --hard 97ea0f9,这个时候，git的提交历史变为:")]),t._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("97ea0f9 (HEAD -> master) 第三次修改\ne50b7c2 第二次修改\n3a52650 第一次修改\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("使用reset命令，Git会把要回退版本之后提交的修改都删除掉。要从第四次修改回退到第一次修改，那么会删除第二、三、四次的修改。【注：这里并不是真正的物理删除】")]),t._v(" "),e("p",[t._v("那如果发现第三次修改有错误，想要恢复第三次修改，却要保留第四次修改呢？")]),t._v(" "),e("p",[t._v("这个时候就可以用revert命令：")]),t._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('git revert -n 97ea0f9\ngit commit -m "恢复第三次修改"\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("Git提交历史会变成：")]),t._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('33b8b30 (HEAD -> master) Revert "恢复第三次修改"\n42eae13 第四次修改\n97ea0f9 第三次修改\ne50b7c2 第二次修改\n3a52650 第一次修改\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("实际上，Git把第三次修改从提交中剔除(还原)了，还保留了第四次修改，并且产生了新的commit_id。")]),t._v(" "),e("h2",{attrs:{id:"git-分支管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-分支管理"}},[t._v("#")]),t._v(" Git 分支管理")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("创建分支: "),e("code",[t._v("git branch test")])])]),t._v(" "),e("li",[e("p",[t._v("切换分支: "),e("code",[t._v("git checkout test")])])]),t._v(" "),e("li",[e("p",[t._v("创建并切换分支："),e("code",[t._v("git checkout -b test")])])]),t._v(" "),e("li",[e("p",[t._v("将test分支的更改合并到master分支：先在test分支上commit、push，再："),e("code",[t._v("git checkout master")]),t._v("; "),e("code",[t._v("git merge test")])])]),t._v(" "),e("li",[e("p",[t._v("如果合并时产生冲突：先手动解决冲突，再合并")])]),t._v(" "),e("li",[e("p",[t._v("删除分支："),e("code",[t._v("git branch -d test")])])]),t._v(" "),e("li",[e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git stash\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("如果当前分支还有任务没有做完，也不想提交，但此时需要切换或者创建其它分支，就可以使用stash将当前分支的所有修改（包括暂存区）先储藏起来；然后就可以切换到其它分支")]),t._v(" "),e("li",[t._v("在其它分支工作完成之后，首先切换回原来的分支，然后使用"),e("code",[t._v("git stash list")]),t._v("命令查看")]),t._v(" "),e("li",[t._v("可以使用"),e("code",[t._v("git stash apply <stash number>")]),t._v("恢复之前储藏的工作现场，再使用"),e("code",[t._v("git stash drop <stash number>")]),t._v("删除掉储藏的内容")]),t._v(" "),e("li",[t._v("也可以直接用"),e("code",[t._v("git stash pop")]),t._v("恢复并删除内容")])])]),t._v(" "),e("li",[e("p",[t._v("如果在其它分支上做了一个修改（比如修复了一个bug，这次修改有一个commitID），想要将这次修改应用到当前分支上，可以使用："),e("code",[t._v("git cherry-pick commitID")]),t._v("，可以复制一个特定的提交到当前分支")])])]),t._v(" "),e("h2",{attrs:{id:"其他内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他内容"}},[t._v("#")]),t._v(" 其他内容")]),t._v(" "),e("h3",{attrs:{id:"git-merge和rebase的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-merge和rebase的区别"}},[t._v("#")]),t._v(" git merge和rebase的区别")]),t._v(" "),e("p",[e("strong",[t._v("首先是git log区别")])]),t._v(" "),e("p",[t._v("采用merge和rebase后，git log的区别，"),e("strong",[t._v("merge命令不会保留merge的分支的commit")]),t._v("：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/12/8cb7f9cbe945c.png",alt:"img"}})]),t._v(" "),e("p",[e("strong",[t._v("处理冲突的方式")])]),t._v(" "),e("ul",[e("li",[t._v("（一股脑）使用"),e("code",[t._v("merge")]),t._v("命令合并分支，解决完冲突，执行"),e("code",[t._v("git add .")]),t._v("和"),e("code",[t._v("git commit -m'fix conflict'")]),t._v("。这个时候会产生一个commit。")]),t._v(" "),e("li",[t._v("（交互式）使用"),e("code",[t._v("rebase")]),t._v("命令合并分支，解决完冲突，执行"),e("code",[t._v("git add .")]),t._v("和"),e("code",[t._v("git rebase --continue")]),t._v("，不会产生额外的commit。这样的好处是，‘干净’，分支上不会有无意义的解决分支的commit；坏处，如果合并的分支中存在多个"),e("code",[t._v("commit")]),t._v("，需要重复处理多次冲突。")])]),t._v(" "),e("p",[e("code",[t._v("git pull")]),t._v("和"),e("code",[t._v("git pull --rebase")]),t._v("区别："),e("code",[t._v("git pull")]),t._v("做了两个操作分别是‘获取’和合并。所以加了rebase就是以rebase的方式进行合并分支，默认为merge。")]),t._v(" "),e("h4",{attrs:{id:"git-merge-和-git-merge-no-ff的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-merge-和-git-merge-no-ff的区别"}},[t._v("#")]),t._v(" "),e("code",[t._v("git merge")]),t._v(" 和 "),e("code",[t._v("git merge --no-ff")]),t._v("的区别")]),t._v(" "),e("p",[t._v("我自己尝试"),e("code",[t._v("merge")]),t._v("命令后，发现：merge时并没有产生一个commit。不是说merge时会产生一个merge commit吗？")]),t._v(" "),e("p",[e("strong",[t._v("注意")]),t._v("：只有在冲突的时候，解决完冲突才会自动产生一个commit。")]),t._v(" "),e("p",[t._v("如果想在没有冲突的情况下也自动生成一个commit，记录此次合并就可以用："),e("code",[t._v("git merge --no-ff")]),t._v("命令，下面用一张图来表示两者的区别：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/12/0883687a02b4f.png",alt:"img"}})]),t._v(" "),e("p",[t._v("如果不加 --no-ff 则被合并的分支之前的commit都会被抹去，只会保留一个解决冲突后的 merge commit。")]),t._v(" "),e("p",[t._v("参考：")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.jianshu.com/p/f23f72251abc",target:"_blank",rel:"noopener noreferrer"}},[t._v("git rebase 和 git merge 的区别 - 简书 (jianshu.com)"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/xueweihan/p/5743327.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("[git]merge和rebase的区别 - 削微寒 - 博客园 (cnblogs.com)"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"git和svn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git和svn"}},[t._v("#")]),t._v(" Git和SVN")]),t._v(" "),e("p",[t._v("这个也比较常问这里简单总结一下。")]),t._v(" "),e("h3",{attrs:{id:"svn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#svn"}},[t._v("#")]),t._v(" SVN")]),t._v(" "),e("p",[t._v("SVN是Subversion的简称，是一个开放源代码的版本控制系统,支持大多数常见的操作系统。作为一个开源的版本控制系统,Subversion管理着随时间改变的数据。这些数据放置在一个中央资料档案库(repository)中。这个档案库很像一个普通的文件服务器,不过它会记住每一次文件的变动。这样你就可以把档案恢复到旧的版本,或是浏览文件的变动历史。Subversion是一个通用的系统,可用来管理任何类型的文件,其中包括了程序源码。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/22/fb6b6fa89ecb6.png",alt:"1619080707336.png"}})]),t._v(" "),e("p",[t._v("集中式代码管理的核心是"),e("a",{attrs:{href:"http://baike.baidu.com/view/899.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("服务器"),e("OutboundLink")],1),t._v("，所有开发者在开始新一天的工作之前必须从服务器获取代码，然后开发，最后解决冲突，提交。所有的版本信息都放在服务器上。如果脱离了服务器，开发者基本上可以说是无法工作的。下面举例说明：")]),t._v(" "),e("p",[t._v("1、从服务器下载项目组最新代码。")]),t._v(" "),e("p",[t._v("2、进入自己的分支，进行工作，每隔一个小时向服务器自己的分支提交一次代码（很多人都有这个习惯。因为有时候自己对代码改来改去，最后又想还原到前一个小时的版本，或者看看前一个小时自己修改了哪些代码，就需要这样做了）。")]),t._v(" "),e("p",[t._v("3、下班时间快到了，把自己的分支合并到服务器主分支上，一天的工作完成，并反映给服务器。")]),t._v(" "),e("h3",{attrs:{id:"git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),e("p",[t._v("Git是一款免费、开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目")]),t._v(" "),e("p",[t._v("Git是一个开源的分布式版本控制系统，用以有效、高速的处理从很小到非常大的项目版本管理。Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。")]),t._v(" "),e("p",[t._v("分布式相比于集中式的最大区别在于开发者可以提交到本地，每个开发者通过克隆（git clone），在本地机器上拷贝一个完整的Git仓库.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/22/d4a53962cb72c.png",alt:"1619080794290.png"}})]),t._v(" "),e("h3",{attrs:{id:"主要区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主要区别"}},[t._v("#")]),t._v(" 主要区别")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("SVN属于集中化的版本控制系统，有个不太精确的比喻:SVN = 版本控制+ 备份服务器")]),t._v(" "),e("p",[t._v("SVN使用起来有点像是档案仓库的感觉，支持并行读写文件，支持代码的版本化管理，功能包括取出、导入、更新、分支、改名、还原、合并等。")])]),t._v(" "),e("li",[e("p",[t._v("Git是一个分布式版本控制系统，操作命令包括：clone，pull，push,branch ,merge ,push,rebase，Git擅长的是程序代码的版本化管理。")])]),t._v(" "),e("li",[e("p",[t._v("GIT跟SVN一样有自己的集中式版本库或服务器。但，GIT更倾向于被使用于分布式模式，也就是每个开发人员从中心版本库/服务器上chect out代码后会在自己的机器上克隆一个自己的版本库。可以这样说，如果你被困在一个不能连接网络的地方时，就像在飞机上，地下室，电梯里等，你仍然能够提交文件，查看历史版本记录，创建项目分支，等。对一些人来说，这好像没多大用处，但当你突然遇到没有网络的环境时，这个将解决你的大麻烦。")])]),t._v(" "),e("li",[e("p",[t._v("GIT把内容按元数据方式存储，而SVN是按文件")]),t._v(" "),e("p",[t._v("所有的资源控制系统都是把文件的元信息隐藏在一个类似.svn,.cvs等的文件夹里。如果你把.git目录的体积大小跟.svn比较，你会发现它们差距很大。因为.git目录是处于你的机器上的一个克隆版的版本库，它拥有中心版本库上所有的东西，例如标签，分支，版本记录等。")])]),t._v(" "),e("li",[e("p",[t._v("分支在SVN中一点不特别，就是版本库中的另外的一个目录。如果你想知道是否合并了一个分支，你需要手工运行像这样的命令svn propget svn:mergeinfo，来确认代码是否被合并。然而，处理GIT的分支却是相当的简单和有趣。你可以从同一个工作目录下快速的在几个分支间切换。你很容易发现未被合并的分支，你能简单而快捷的合并这些文件。")])]),t._v(" "),e("li",[e("p",[t._v("GIT没有一个全局的版本号，而SVN有")]),t._v(" "),e("p",[t._v("目前为止这是跟SVN相比GIT缺少的最大的一个特征。你也知道，SVN的版本号实际是任何一个相应时间的源代码快照。")])]),t._v(" "),e("li",[e("p",[t._v("GIT的内容完整性要优于SVN：")]),t._v(" "),e("p",[t._v("GIT的内容存储使用的是SHA-1哈希算法。这能确保代码内容的完整性，确保在遇到磁盘故障和网络问题时降低对版本库的破坏。")])])]),t._v(" "),e("p",[t._v("参考")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/mine_song/article/details/70770467",target:"_blank",rel:"noopener noreferrer"}},[t._v("SVN和Git 介绍,区别,优缺点,适用范围总结_mine_song的博客-CSDN博客_svn和git的优缺点"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);