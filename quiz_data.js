const QUIZ_DATA = [
  {
    "id": 1,
    "type": "single",
    "question": "四台路由器运行IS-IS 且已经建立邻接关系，区域号和路由器的等级如图中标记，下列 说法中正确的有？",
    "questionImage": "images/q001.jpeg",
    "options": [
      "A. R2 和R3 都会产生ATT 置位的Level-1 的LSP",
      "B. R1 没有R4 产生的LSP，因此R1 只通过缺省路由和R4 通信",
      "C. R2 和R3 都会产生ATT 置位的Leve1-2 的LSP",
      "D. R2 和R3 互相学习缺省路由，该网络出现路由环路"
    ],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": "images/q001_expl.jpeg"
  },
  {
    "id": 2,
    "type": "single",
    "question": "关于PIM-SM 中的Hello 报文的描述，错误的是：",
    "questionImage": null,
    "options": [
      "A. 在PIM-SM 网络中，刚启动的组播路由器需要使用Hello 消息来发现邻居，并维护邻居关系。",
      "B. 各路由器之间周期性地使用Hello 消息保持联系。",
      "C. 通过Hello 消息在多路由器网段中选举DR 指定路由器",
      "D. Hello 报文发往组播地址224.0.0.5"
    ],
    "answer": [
      3
    ],
    "explanation": "PIM 协议的Hello 报文的发送方式是组播，组播地址是224.0.0.13。",
    "explanationImage": null
  },
  {
    "id": 3,
    "type": "single",
    "question": "以下是某路由器的部分配置，那么以下关于该配置信息的描述，错误的是哪一 项?",
    "questionImage": "images/q003.jpeg",
    "options": [
      "A. 定义一个名为test 的Route-Policy,该节点序列号为10",
      "B. 设置序号为2 的AS 路径过滤器，允许路由信息中包含AS200 和AS300",
      "C. 该Route-Policy 的10 号节点引用AS 路径过滤器2，并定义了一个if-match 子句",
      "D. 该Route-Policy 只能在OSPF 进程中进行调用"
    ],
    "answer": [
      3
    ],
    "explanation": "该route-policy 只能在BGP 起到过滤作用。",
    "explanationImage": null
  },
  {
    "id": 4,
    "type": "single",
    "question": "在VRP 平台下，以下关于各个协议的默认优先级的描述，正确的是哪一项？",
    "questionImage": null,
    "options": [
      "A. OSPF 路由的优先级是15",
      "B. ISIS 路由的优先级是10",
      "C. 静态路由的优先级是60",
      "D. BGP 路由的优先级是20"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": "images/q004_expl.jpeg"
  },
  {
    "id": 5,
    "type": "single",
    "question": "以下关于BGP 的UPDATE 消息所包含的内容，错误的是哪一项？",
    "questionImage": null,
    "options": [
      "A. UPDATE 包含本端AS 自制系统号",
      "B. UPDATE 包含路径属性",
      "C. UPDATE 包含撤销路由前缀信息",
      "D. UPDATE 包含可达路由前缀信息"
    ],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": "images/q005_expl.jpeg"
  },
  {
    "id": 6,
    "type": "single",
    "question": "以下关于OSPF 多进程描述，错误的是哪一项？",
    "questionImage": null,
    "options": [
      "A. 在同一台路由器上可以运行多个不同的OSPF 进程，它们之间互不影响，彼此独立",
      "B. 路由器的一个接口只能属于一个OSPF 进程",
      "C. 不同OSPF 进程之间的路由交互相当于不同路由协议之间的路由交互",
      "D. 不同OSPF 路由器建立邻居，进程号必须相同"
    ],
    "answer": [
      3
    ],
    "explanation": "不同进程号之间也可建立邻居。",
    "explanationImage": null
  },
  {
    "id": 7,
    "type": "single",
    "question": "以下关于OSPF 缺省路由的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 自治系统边界路由器(ASBR)发布5 类缺省LSA，或者7 类缺省LSA，用来指导自治系统(AS)内路由器访问自治系统外部",
      "B. OSPF 缺省路由可以由区域边界路由器(ABR)发布3 类缺省LSA，用来指导区域内路由器进行区域之间报文的转发",
      "C. 当路由器无精确匹配的路由时，就可以通过缺省路由进行报文转发",
      "D. 由于OSPF 路由的分级管理，5 类和7 类缺省路由的优先级高于3 类缺省路由"
    ],
    "answer": [
      3
    ],
    "explanation": "由于OSPF 路由的分级管理，Type3 缺省路由的优先级高于Type5 和Type7 路由。",
    "explanationImage": null
  },
  {
    "id": 8,
    "type": "single",
    "question": "BGP 常用的路由策略工具中，以下哪一项能够用来匹配特定AS path 属性？",
    "questionImage": null,
    "options": [
      "A. filter-policy",
      "B. ip-prefix",
      "C. ip as-path-filer",
      "D. community-filter"
    ],
    "answer": [
      2
    ],
    "explanation": "as-path-filer 用来匹配AS path 的",
    "explanationImage": null
  },
  {
    "id": 9,
    "type": "single",
    "question": "DHCP 协议运行过程中，客户端从申请到获得IP 地址时的流程是：",
    "questionImage": "images/q009.jpeg",
    "options": [
      "A. ③-②-①-④",
      "B. ①-②-③-④",
      "C. ①-④-③-②",
      "D. ③-④-①-②"
    ],
    "answer": [
      0
    ],
    "explanation": "运行流程如答案，记住即可",
    "explanationImage": null
  },
  {
    "id": 10,
    "type": "single",
    "question": "下面关于display ospf peers 输出的信息，描述正确的是",
    "questionImage": "images/q010.jpeg",
    "options": [
      "A. DD 交换过程中经过协商，本端成为Slave",
      "B. Address:10.1.1.,1 表示本端接☐地址是10.1,1.1",
      "C. Router ID 表示本端路由器ID 为10.1.1.1",
      "D. 指定路由器(DR)为地址是10.1.1.1"
    ],
    "answer": [
      3
    ],
    "explanation": "信息显示，主从协商邻居是Slave，邻居地址10.1.1.1，本段的Router ID 是 10.1.1.2，DR 是10.1.1.1",
    "explanationImage": null
  },
  {
    "id": 11,
    "type": "single",
    "question": "某中型规模园区网络通过SNMP 协议管理网络，该园区对于网络安全性很高，推荐使 用SNMP 哪个版本进行管理？",
    "questionImage": null,
    "options": [
      "A. SNMPv4",
      "B. SNMPv1",
      "C. SNMPv2C",
      "D. SNMPv3"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": "images/q011_expl.jpeg"
  },
  {
    "id": 12,
    "type": "single",
    "question": "以下关于BGP 路由更新的描述，正确的是哪一项：",
    "questionImage": null,
    "options": [
      "A. BGP 工作在UDP 之上，传输层协议是179",
      "B. BGP 无需周期性通告路由信息",
      "C. BGP 每次路由更新都发送完整的路由表信息",
      "D. BGP 采用组播更新"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q012_expl.jpeg"
  },
  {
    "id": 13,
    "type": "single",
    "question": "路由器R1 和R2 分别使用GigabitEthernet0/0/0 直连，并试图建立OSFP 邻居，然而 邻居关系并没有成功建立，排错过程如图所示。那么以下哪一个操作可以使R1 和R2 邻 居管理正常建立？",
    "questionImage": "images/q013.jpeg",
    "options": [
      "A. [R2]ospf 1&nbsp;[R2-ospf-1]ara0&nbsp;[R2-ospf-1-area-0.0.0.0]timer hello 10",
      "B. [R2]interface GigabitEthernet 0/0/0&nbsp;[R2-GigabitEthernet0/0/0]undo ospf timerhello",
      "C. [R2]interface GigabitEthernet 0/0/0[R2-gigabitErhernet0/0/0]ospf timer hello 20",
      "D. [R2]ospf 1&nbsp;[R2-ospf-1]area0[R2-ospf-1-area-0.0.0.0]undo timer hello"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": "images/q013_expl.jpeg"
  },
  {
    "id": 14,
    "type": "single",
    "question": "以下关于VRRP 的描述，错误的是哪一项？",
    "questionImage": null,
    "options": [
      "A. VRRP 是一种冗余备份协议，为具有组播或广播能力的局城网(如以太网)设计，保证当局城网内主机的下一跳路由器设备出现故障时，可以及时的有另一台路由器来代替，从而保持网络通信的连续性和可靠性",
      "B. 在使用VRRP 协议时，需要在路由器上配置虚拟路由器号和虚拟IP 地址，虚拟路由器的MAC 地址无需配置可直接使用主用路由器的真实MAC",
      "C. 网络上的主机与虚拟路由器通信，不需要了解这个网络上物理路由器的所有信息",
      "D. 一个虚拟路由器由一个主路由器和若干个备份路由器组成，主路由器实现真正的转发功能，当主路由器出现故障时，一个备份路由器将成为新的主路由器并接替他的工作"
    ],
    "answer": [
      1
    ],
    "explanation": "在使用协议时，需要在路由器上配置虚拟路由器号和虚拟IP 地址，直接使用虚拟路 由器的虚拟MAC，这样在这个网络中就加入了一个虚拟路由器。",
    "explanationImage": null
  },
  {
    "id": 15,
    "type": "single",
    "question": "关于VRRP master 设备的描述，错误的是",
    "questionImage": null,
    "options": [
      "A. 定期发送VRRP 报文",
      "B. 以虚拟MAC 地址响应对虚拟IP 地址的ARP 请求",
      "C. 转发目的MAC 地址为虚拟MAC 地址的IP 报文",
      "D. 缺省情况下，即使该路由器已经是Master，也会被优先级高的Backup 路由器抢占"
    ],
    "answer": [
      3
    ],
    "explanation": "ABC 都是官方原话，都是对的，D 选项没有指明是抢占模式还是非抢占模式下，描 述不严谨",
    "explanationImage": null
  },
  {
    "id": 16,
    "type": "single",
    "question": "如图所示的网络，R1 和R2 运行OSPF 协议，R1 的Router-lD 为10.0.1.1，R2 的 Router-lD 为10.0.2.2。当R1 收到R2 发送的OSPF 报文后，此时R1 检查标记的邻居状态 是以下选项中的哪一项？",
    "questionImage": "images/q016.jpeg",
    "options": [
      "A. Down",
      "B. Full",
      "C. 2-way",
      "D. Loading"
    ],
    "answer": [
      2
    ],
    "explanation": "当R1 能收到R2 发来的报文,且收到R2 的Hello 报文中,包含着R1 的RouterID,意味 着R1 发的Hello 报文,R2 收到了,R2 认可了这个R1 这个邻居。所以R1 的邻居状态(R2 的 状态)是2-way,双向通信状态。",
    "explanationImage": null
  },
  {
    "id": 17,
    "type": "single",
    "question": "以下加密算法中，哪一个需要公钥和私钥两种不同的秘钥配合使用？",
    "questionImage": null,
    "options": [
      "A. AES",
      "B. RSA",
      "C. DES",
      "D. 3DES"
    ],
    "answer": [
      1
    ],
    "explanation": "AES、3DES、DES 是对称加密算法。只有“RSA”是一种非对称加密算法，需要使用公 钥、私钥两种密钥。",
    "explanationImage": null
  },
  {
    "id": 18,
    "type": "single",
    "question": "以下关于OSPF 协议的描述，错误的是哪一项？",
    "questionImage": null,
    "options": [
      "A. OSPF 是一个基于链路状态的外部网关协议",
      "B. OSPF 支持对等价路由进行负载分担",
      "C. OSPF 报文封装在IP 报文内，可以采用单播或组播的形式发送",
      "D. OSPF 协议支持区域划分"
    ],
    "answer": [
      0
    ],
    "explanation": "OSPF 属于IGP，是内部网关协议",
    "explanationImage": null
  },
  {
    "id": 19,
    "type": "single",
    "question": "以下关于OSPF 的描述，错误的是哪一项？",
    "questionImage": null,
    "options": [
      "A. 3 类LSA 中描述的Link StatelD 为该ABR 的Router ID",
      "B. 路由信息只允许在骨干区域和非骨干区域之间发布，不允许在非骨干区域之间直接发布路由信息",
      "C. 每台OSPF 路由器只使用一条Router-LSA 描述属于一个区域的本地活动连接状态",
      "D. Router-LSA 描述的连接类型共有四种，分别是P2P、TransNet、StubNet 和虚链路"
    ],
    "answer": [
      0
    ],
    "explanation": "3 类LSA 的link-state ID 表示的是不同区域之间的路由的网段；掩码信息在LSA 的 详细信息中包含着。",
    "explanationImage": null
  },
  {
    "id": 20,
    "type": "single",
    "question": "以下关于OSPF 的描述，正确的是哪一项？",
    "questionImage": null,
    "options": [
      "A. 只有LS Update 和LS Request 报文携带完整的LSA 信息",
      "B. Hello 包的目的地址是224.0.0.5 和224.0.0.6",
      "C. 在ospf mtu-enable 命令后，OSPF 会检查LSU 中的MTU 长度，如果和自己发出的报文中MTU 长度不一致，则设备维持在Exchange 状态",
      "D. DD 报文中不一定携带链路状态摘要信息，此时该DD 报文可以用于协商主从关系"
    ],
    "answer": [
      3
    ],
    "explanation": "在Exstart 阶段，发送的第一个DD 报文，其中不包含任何的LSA 摘要信息，用于协 商设备之间的主从关系，实现DD 报文的可靠传输。",
    "explanationImage": null
  },
  {
    "id": 21,
    "type": "single",
    "question": "以下关于PIM-SM(SSM)的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. PIM-SM(SSM)无需维护RP",
      "B. PIM-SM(SSM)模型形成的组播分发树会一直存在，不会因为没有组播流量而消失",
      "C. PIM-SM(SSM)可以在成员端DR 上基于组播源地址直接反向建立SPT",
      "D. 在PIM-SM(SSM)中依旧需要注册组播源"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": "images/q021_expl.jpeg"
  },
  {
    "id": 22,
    "type": "single",
    "question": "以下关于IS-IS 开销的描述，正确的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 一条IS-IS 路径的Cost 等于本路由器到达目标网段沿的所有链路的Cost 总和",
      "B. 缺省情况下，华为设备接口开销值固定为1",
      "C. 缺省情况下，华为路由器采用的开销类型是Wide",
      "D. 华为设备不支持根据接口带宽自动计算开销"
    ],
    "answer": [
      0
    ],
    "explanation": "华为设备支持参考带宽/实际带宽，计算开销;ISIS 缺省的开销类型是narrow;缺省情 况下，华为接口开销为10。",
    "explanationImage": null
  },
  {
    "id": 23,
    "type": "single",
    "question": "相比较RSTP，MSTP 定义了更多的端口角色。如图所示，SW3 连接SW5 的端口是以 下哪一端口角 色?",
    "questionImage": "images/q023.jpeg",
    "options": [
      "A. 指定端口",
      "B. 根端口",
      "C. Master 端口",
      "D. 域边缘端口"
    ],
    "answer": [
      3
    ],
    "explanation": "域边缘端口是指位于MST 域的边缘并连接其它MST 域或SST 的端口。SW3 连接 SW5 的端口就是域边缘端口。",
    "explanationImage": null
  },
  {
    "id": 24,
    "type": "single",
    "question": "以下关于AS_Path 的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 该属性可以确保IBGP 对等体之间无环路",
      "B. 该属性可以作为BGP 选路的条件",
      "C. 该属性为公认必遵属性",
      "D. 如果BGP 配置了路由聚合，有序AS_Path 属性会丢失，可能会存在环路风险"
    ],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 25,
    "type": "single",
    "question": "在建立BGP 对等体的过程中，Openent 状态表明BGP 等待的Open 报文，并对收到的 Open 报文中的AS 号、版本号和认证码等进行检查。如果发现收到的Open 报文有错误， 则设备会采取以下哪一项动作?",
    "questionImage": null,
    "options": [
      "A. BGP 转至Active 状态",
      "B. BGP 发送Notification 报文给对等体，并转至Idle 状态",
      "C. BGP 发送Keepalive 报文，并转至OpenConfirm 状态",
      "D. BGP 启动连接重传定时器，等待TCP 完成连接"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q025_expl.jpeg"
  },
  {
    "id": 26,
    "type": "single",
    "question": "在WLAN 组中，为保证较高的组网可靠性，可使用以下哪一备份技术部署两台同型号 但所处异地的AC?",
    "questionImage": null,
    "options": [
      "A. N+1 备份",
      "B. VRRP 双机热备",
      "C. 双链路热备",
      "D. 双链路冷备"
    ],
    "answer": [
      2
    ],
    "explanation": "如截图最后一行所描述，为保证较高的组网可靠性，还需要AC 所处异地，只有双链 路热备份符合；双链路冷备份和N+1 是可靠性要求较低场景，VRRP 要求本地，都不符 合。",
    "explanationImage": null
  },
  {
    "id": 27,
    "type": "single",
    "question": "以下关于策略路由特点的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 能通过修改路由属性，对网络数据流量可以合理规划，以提高网络性能",
      "B. 能通过控制路由器的路由表规模，来节约系统资源",
      "C. 能通过控制路由的接收、发布和引入，以提高网络的安全性",
      "D. 能够修改路由属性，但是不能改变网络流量经过的路径"
    ],
    "answer": [
      3
    ],
    "explanation": "D 错误，改变路由属性的是路由策略功能，不是策略路由功能",
    "explanationImage": null
  },
  {
    "id": 28,
    "type": "single",
    "question": "路由器R1 和R2 的连接和配置如图所示，那么正确的是以下哪一 项?",
    "questionImage": "images/q028.jpeg",
    "options": [
      "A. R1 和R2 不能建立邻接关系，因为OSPF 进程号不一致",
      "B. R1 和R2 可以建立邻接关系，并且能完成路由计算",
      "C. R1 和R2 可以建立邻接关系，但是不能完成路由计算",
      "D. R1 和R2 不能建立邻接关系，因为接口的网络类型不一致"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": "images/q028_expl.jpeg"
  },
  {
    "id": 29,
    "type": "single",
    "question": "以下关于配置OSPF Stub 区域注意事项的描述，正确的是哪一项?",
    "questionImage": null,
    "options": [
      "A. Stub 区域可以存在ASBR",
      "B. 虚连接可以穿越Stub 区域",
      "C. 如果将一个区域配置成为Stub 区域，则该区域中的所有路由器都要配置stub 区域属性",
      "D. 骨干区域可以配置成为Stub 区域"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": "images/q029_expl.jpeg"
  },
  {
    "id": 30,
    "type": "single",
    "question": "如图所示的OSPF 网络，R1 和R2 之间通过四条链路相连，R2 的Loopback0 接口开启 OSPF，在R1 的OSPF 进程中配置“maximum load-balancing 1”命令，则R1 到达R2 的 Loopback0 接囗的出接口为以下哪一 项?",
    "questionImage": "images/q030.jpeg",
    "options": [
      "A. GE0/0/2.20",
      "B. GE0/0/0",
      "C. GE0/0/1",
      "D. GE0/0/2.10"
    ],
    "answer": [
      0
    ],
    "explanation": "如果未手动配置优先级，OSPF 会按照以下顺序选择等价路由：接口优先级：优先 选择接口优先级高的路由。接口索引：如果接口优先级相同，则比较接口索引，选择接口 索引大的路由。下一跳IP 地址：如果接口优先级和索引都相同，则比较下一跳IP 地址， 选择IP 地址大的路由。",
    "explanationImage": null
  },
  {
    "id": 31,
    "type": "single",
    "question": "缺省情况下，广播型网络中运行IS-IS 的路由器，DIS 发送CSNP 报文的周期是以下选 项中的哪一项?",
    "questionImage": null,
    "options": [
      "A. 40 秒",
      "B. 10 秒",
      "C. 5 秒",
      "D. 30 秒"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 32,
    "type": "single",
    "question": "在IS-IS 网络中，定义了多种IS-IS 报文类型，它们负责的功能各不相同。其中，用于 建立和维持邻接关系的是以下哪一报文类型?",
    "questionImage": null,
    "options": [
      "A. CSNP",
      "B. IIH",
      "C. PSNP",
      "D. LSP"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q032_expl.jpeg"
  },
  {
    "id": 33,
    "type": "single",
    "question": "在IS-IS 网络中，所有路由器都会产生LSP，但伪节点生成的LSP 中，不包含以下哪一 种信息?",
    "questionImage": null,
    "options": [
      "A. 邻接信息",
      "B. 支持的网络协议信息",
      "C. 路由信息",
      "D. 接口信息"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 34,
    "type": "single",
    "question": "在IS-IS 网络中，若一台路由器为Level-1-2 路由器，那么它发送的IIH 报文中的 Reserved/CircuitType 字段应该表示为以下哪一项?",
    "questionImage": null,
    "options": [
      "A. 01",
      "B. 00",
      "C. 11",
      "D. 10"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": "images/q034_expl.jpeg"
  },
  {
    "id": 35,
    "type": "single",
    "question": "在BGP 中路由聚合可以有效减少BGP 路由规模，但是在配置BGP 路由聚合时需要诸 多参数，否则会引起路由环路等问题。以下关工配置BGP 路由聚合的描述，错误的是哪 一项?",
    "questionImage": null,
    "options": [
      "A. 执行命令aggregate，并携带suppress-policy 参数时，只发布通过路由策略的被聚合的路由",
      "B. 执行命令aggregate，将发布所有聚合路由和被聚合的路由",
      "C. 执行命令aggregate，并携带detail-suppressed 参数时，只发布聚合路由",
      "D. 执行命令summary automatic，将按照自然网段聚合子网路由"
    ],
    "answer": [
      0
    ],
    "explanation": "A 选项是只发布聚合路由和通过路由策略的被聚合的路由，其他都对",
    "explanationImage": "images/q035_expl.jpeg"
  },
  {
    "id": 36,
    "type": "single",
    "question": "在OSPF 网络中，OSPF 根据链路层协议类型，将网络分为了四种网络类型。其中，以 组播方式发送所有协议报文的是以下哪一种网络类型?",
    "questionImage": null,
    "options": [
      "A. Broadcast",
      "B. NBMA",
      "C. P2P",
      "D. P2MP"
    ],
    "answer": [
      2
    ],
    "explanation": "根据官网资料，只有P2P 是以组播方式发送所有协议的报文，其他三种均有单播参 与官方资料链接： https://support.huawei.com/enterprise/zh/doc/EDOC1100333628/32a400ec",
    "explanationImage": "images/q036_expl.jpeg"
  },
  {
    "id": 37,
    "type": "single",
    "question": "在OSPF 广播型网络中，所有OSPF 路由器进行报文交互时，使用的2 层组播地址是以 下哪一项?",
    "questionImage": null,
    "options": [
      "A. 01-00-5e-00-00-01",
      "B. 01-00-5e-00-00-06",
      "C. 01-00-5e-00-00-05",
      "D. 01-00-5e-00-00-02"
    ],
    "answer": [
      2
    ],
    "explanation": "224.0.0.5 是所有OSPF 路由器所使用的组播地址，224.0.0.5 对应的MAC 地址是01- 00-5E-00-00-05。",
    "explanationImage": null
  },
  {
    "id": 38,
    "type": "single",
    "question": "在OSPF 网络中，LSDB 用于存放LSA 条目，常见的LSA 类型主要有路由器LSA、网络 LSA 等。通常情况下，可使用LSA 三元组来唯一标识一条LSA,那么该三元组中不包括以 下哪一项?",
    "questionImage": null,
    "options": [
      "A. LS Type",
      "B. Link State lD",
      "C. LS Sequence Number",
      "D. Advertising Router"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": "images/q038_expl.jpeg"
  },
  {
    "id": 39,
    "type": "single",
    "question": "缺省情况下，OSPF 的P2P 和Broadcast 网络类型中接口的Dead time 是以下哪一时长?",
    "questionImage": null,
    "options": [
      "A. 40 秒",
      "B. 10 秒",
      "C. 60 秒",
      "D. 120 秒"
    ],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": "images/q039_expl.jpeg"
  },
  {
    "id": 40,
    "type": "single",
    "question": "以下关于BGP 协议的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. BGP 非周期性通告路由信息",
      "B. 如果路由器system 视图下和BGP 视图下都配置了router-id，优选BGP 视图下的router-id",
      "C. 因为BGP 只选择最优路由，所以无法实现负载分担",
      "D. 协议首选值是华为设备的特有属性，仅在本地有效"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": "images/q040_expl.jpeg"
  },
  {
    "id": 41,
    "type": "single",
    "question": "当一台运行了BGP 的路由器收到邻居发送来的路由时，发现该路由不可达。那么该设 备会采取以下哪-项措施?",
    "questionImage": null,
    "options": [
      "A. 接收该路由，并加入到IP 路由表中",
      "B. 直接丢弃该路由",
      "C. 向该邻居回复一个错误消息报文来通知该路由不可达",
      "D. 接收该路由，并加入到BGP 路由表中"
    ],
    "answer": [
      3
    ],
    "explanation": "BGP 路由器会接收该路由，并将其记录在BGP 路由表中。BGP 路由表中会包含所有 从邻居收到的路由信息，无论这些路由是否可达。",
    "explanationImage": null
  },
  {
    "id": 42,
    "type": "single",
    "question": "在华为交换机中，以下哪一个平面提供了数据平面转发前所必须知晓的网络信息和转 发查询表项?",
    "questionImage": null,
    "options": [
      "A. 监控平面",
      "B. 数据平面",
      "C. 控制平面",
      "D. 转发平面"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": "images/q042_expl.jpeg"
  },
  {
    "id": 43,
    "type": "single",
    "question": "在组播中优选RPF 路由要遵循一定原则进行匹配，那么以下原则中，不属于优选RPF 路由原则的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 路由优先级(Pre 值)",
      "B. 掩码最长匹配",
      "C. 组播静态路由>MBGP 路由>单播路由",
      "D. 接开销最小"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": "images/q043_expl.jpeg"
  },
  {
    "id": 44,
    "type": "single",
    "question": "在IPv4 地址空间中，D 类地址被用于组播。在D 类地址范围内，以下哪一项属于为路 由协议预留的永久组地址?",
    "questionImage": null,
    "options": [
      "A. 232.0.0.0-232.255.255.255",
      "B. 239.0.0.0-239.255.255.255",
      "C. 224.0.0.0-224.0.0.255",
      "D. 224.0.1.0-231.255.255.255"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": "images/q044_expl.jpeg"
  },
  {
    "id": 45,
    "type": "single",
    "question": "一般情况下通信过程中需要占用两个端口的协议称为多通道协议，此时需要防火墙上 开启ASP 功能在保障数据通道顺利建立的同时减少被攻击的风险。那么以下协议中，不属 于多通道协议的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 323",
      "B. FTP",
      "C. SMTP",
      "D. SIP"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": "images/q045_expl.jpeg"
  },
  {
    "id": 46,
    "type": "single",
    "question": "BFD 是一种高可靠性的快速故障检测机制，可以检测多个网络层次的通道。BFD 本身 属于以下哪一层次的协议?",
    "questionImage": null,
    "options": [
      "A. 网络层",
      "B. 物理层",
      "C. 数据链路层",
      "D. 应用层"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": "images/q046_expl.jpeg"
  },
  {
    "id": 47,
    "type": "single",
    "question": "在SNMP 管理模型中，以下哪一项元素用于定义被管理设备的属性?",
    "questionImage": null,
    "options": [
      "A. Managed Object",
      "B. Agent",
      "C. NMS",
      "D. MIB"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": "images/q047_expl.jpeg"
  },
  {
    "id": 48,
    "type": "single",
    "question": "在WLAN 网络中，MAC 认证是一种基于接口和终端MAC 地址对用户的访问权限进行 控制的认证方法,那么以下关于MAC 认证的描述，错误的是哪项?",
    "questionImage": null,
    "options": [
      "A. 终端无需安装任何客户端软件",
      "B. MAC 认证中，对于用户密码的处理有PAP 和CHAP 两种方式",
      "C. 缺省情况下，终端进行MAC 认证时使用的用户名是终端MAC 地址，密码是终端MAC地址后六位(16 进制)",
      "D. MAC 认证系统包括终端、接入设备和认证服务器三个组成部分"
    ],
    "answer": [
      2
    ],
    "explanation": "C 错误，缺省情况下，终端进行MAC 认证时使用的用户名和密码都是终端MAC 地 址，ABD 技术文档均有介绍",
    "explanationImage": "images/q048_expl.jpeg"
  },
  {
    "id": 49,
    "type": "single",
    "question": "在OSPF 网络中，OSPF 邻居状态有Down、Init、2-way、Loading、Full 等多种状态 机。其中，OSPF 路由器协商主从关系，是发生在以下哪一状态机?",
    "questionImage": null,
    "options": [
      "A. 2-way",
      "B. Exchange",
      "C. Init",
      "D. ExStart"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": "images/q049_expl.jpeg"
  },
  {
    "id": 50,
    "type": "single",
    "question": "某工程师在配置组播协议时未经过版本比对，结果设备配置的IGMP Snooping 版本比 用户主机的IGMP 版本低。此时会发生以下哪一种情况?",
    "questionImage": null,
    "options": [
      "A. 主机的IGMP 版本自动升级，用户正常收到组播数据",
      "B. 用户无法收到组播数据，但是设备在收到IGmP Report 报文后会生成转发表项",
      "C. 用户无法收到组播数据，因为设备在收到IGMP Report 报文后，只会向路由器端口转发，不会生成成员端口和转发表项",
      "D. 设备IGMP Snooping 版本自动进行降低兼容，用户正常收到组播据"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": "images/q050_expl.jpeg"
  },
  {
    "id": 51,
    "type": "single",
    "question": "安全策略的主要目标是降低入侵成功率和发现攻击者，为了确保在攻击的整个生命周 期内进行检测和预防，需要制定一系列的规划。以下关于规划安全策略的描述，错误的是 哪一项?",
    "questionImage": null,
    "options": [
      "A. 对于未知威胁的文件可以送往沙箱进行检测，并且防火墙定时读取沙箱的检测结果，且根据检测结果对后续流量进行阻断",
      "B. 管理员有必要在设置前全面了解网络中的应用、用户和内容，这是设置安全策略的前提，以便防火墙可以检查对应的用户流量",
      "C. 为了进一步减少攻击面，请在允许某应用的安全策略基础上开启URL 过滤和文件过滤等功能，阻止用户访问高风险网站和下载高危文件",
      "D. 在所有动作为允许的安全策略规则中尽量不引用内容安全配置文件，以便快速检查"
    ],
    "answer": [
      3
    ],
    "explanation": "内容安全配置文件（如URL 过滤、文件过滤等）是用来加强对网络流量的检查和限 制，有助于提高网络安全性。如果所有动作为允许，没有引用内容安全配置文件，可能会 导致漏洞被利用或不良内容传播的风险增加。",
    "explanationImage": null
  },
  {
    "id": 52,
    "type": "single",
    "question": "在MST 域内，MSTP 根据VLAN 和生成树实例的映射关系，针对不同的VLAN 生成不 同的生成树实例。以下关于生成树实例的特点，描述错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 每个端口在不同MSTI 上的生成树参数需要相同",
      "B. 每个MSTI 只在自己的生成树内发送BPDU",
      "C. 每MSTI 的生成树计算方法与STP 基本相同",
      "D. 每个MSTI 的生成树可以有不同的根，不同的拓扑"
    ],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 53,
    "type": "single",
    "question": "如图所示，R1 将直连路由10.1.1.0/24 引入到了OSPF 中，现用户在R2 和R3 上执行 了双向路由重发布。等网络稳定后，用户在R3 上查看路由表中的10.1.1.0/24 路由条目 时，其Pre 值为以下哪一数 值?",
    "questionImage": "images/q053.jpeg",
    "options": [
      "A. 0",
      "B. 10",
      "C. 15",
      "D. 150"
    ],
    "answer": [
      2
    ],
    "explanation": "缺省情况下，OSPF 内部优先为10，外部优先级为150，IS-IS 协议的优先级为15， R3 上会收到一条来自R1 转发过来的OSPF 外部路由10.1.1.0/24 和一条来自R4 发过来 的IS-IS 路由10.1.1.0/24，最终R1 路由表会选择优先级更小的15。",
    "explanationImage": null
  },
  {
    "id": 54,
    "type": "single",
    "question": "BGP 在选择路由时严格按照先后顺序比较路由的属性，如果通过前面的属性就可以选 出最优路由。BGP 将不再比较后面的属性。因此当出现以下属性时。BGP 选路会先比较哪 一属性?",
    "questionImage": null,
    "options": [
      "A. Local_Pref",
      "B. AS_Path",
      "C. Origin",
      "D. PrefVal"
    ],
    "answer": [
      3
    ],
    "explanation": "如下为官方文档截图，第一个比较的是PrefVal。详细的BGP 选路规则参考官方链 接： https://support.huawei.com/enterprise/zh/doc/EDOC1100411452/312bd6a3",
    "explanationImage": "images/q054_expl.jpeg"
  },
  {
    "id": 55,
    "type": "single",
    "question": "IS-IS 网络中，可将一个AS 划分为骨干区域和非骨干区域。其中，骨干区域可以存在的 IS-IS 路由器是以下哪一项?",
    "questionImage": null,
    "options": [
      "A. Level-1",
      "B. Level-1-2 和Level-2",
      "C. Level-2",
      "D. Level-1-2"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q055_expl.jpeg"
  },
  {
    "id": 56,
    "type": "single",
    "question": "在OSPF 网络中，两台直连路由器建立邻居关系失败，管理员在其中一台路由器上执行 命令出Dispay ospf error 的回显如下。那么通过回显信息分析，可以得出造成该问题的原 因是以下哪一 项?",
    "questionImage": "images/q056.jpeg",
    "options": [
      "A. OSPF Auth Data 一致",
      "B. OSPF Router ID 一致",
      "C. OSPF Auth Type 一致",
      "D. OSPF Area ID 一致"
    ],
    "answer": [
      1
    ],
    "explanation": "从回显信息可以看到，Router ID 混乱有3 个错误报文，其他错误报文均为0，原因 是OSPF Router ID 一致导致的两边Router ID 混乱",
    "explanationImage": "images/q056_expl.jpeg"
  },
  {
    "id": 57,
    "type": "single",
    "question": "在OSPF 网络中，OSPF 定义了多种网络类型，其中，必须由网络工程师手工指定的是 以下哪一种网络类型?",
    "questionImage": null,
    "options": [
      "A. P2P",
      "B. Broadcast",
      "C. NBMA",
      "D. P2MP"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": "images/q057_expl.jpeg"
  },
  {
    "id": 58,
    "type": "single",
    "question": "在OSPF 网络中，为了减少LSDB 的大小，提升设备的性能，OSPF 定义了多种特殊区 域。其中，在完全STUB 区域中，不可能存在以下哪一类LSA?",
    "questionImage": null,
    "options": [
      "A. 1 类LSA",
      "B. 3 类明细LSA",
      "C. 2 类LSA",
      "D. 描述缺省路由的3 类LSA"
    ],
    "answer": [
      1
    ],
    "explanation": "完全STUB 区域，只拥有1 类LSA、2 类LSA、一条描述缺省路由的3 类LSA，没有 明细的3 类 LSA",
    "explanationImage": "images/q058_expl.jpeg"
  },
  {
    "id": 59,
    "type": "single",
    "question": "如图所示为某企业OSPF 网络，R1 的OSPF 相关配置如图中所示。那么以下关于该组 网的描述，错误的是哪一 项?",
    "questionImage": "images/q059.jpeg",
    "options": [
      "A. R1 的GE0/0/1 接口将不能发送OSPF 报文",
      "B. DR1 的GE0/0/1 接口将不能接收OSPF 报文",
      "C. R2 能正常访问Server",
      "D. R1 接口GE0/0/1 所属网段将不能发布出去"
    ],
    "answer": [
      3
    ],
    "explanation": "AB 正确，开启OSPF 被动接口，将不会接受和发送OSPF 报文；C 对D 错，该接口 的直连路由（192.168.4.0/24）仍可以发布出去,R2 能正常访问 Server",
    "explanationImage": "images/q059_expl.jpeg"
  },
  {
    "id": 60,
    "type": "single",
    "question": "Smurf 攻击一般使用以下哪一种协议?",
    "questionImage": null,
    "options": [
      "A. TCP",
      "B. DHCP",
      "C. BGP",
      "D. ICMP"
    ],
    "answer": [
      3
    ],
    "explanation": "攻击者发送大量伪造源IP 的ICMP 数据包到广播地址。在短时间内，大量的回应数 据包涌向目标主机，使目标主机的网络连接和系统性能受到严重影响。",
    "explanationImage": null
  },
  {
    "id": 61,
    "type": "single",
    "question": "以下关于OSPFv3 类LSA、4 类LSA 和5 类LSA 的描述，正确的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 4 类LSA 在穿越不同区域后，不会发生改变，而3 类LSA 和5 类LSA 会发生变化",
      "B. 3 类LSA、4 类LSA 和5 类LSA 在穿越不同区域后，都不会发生改变",
      "C. 5 类LSA 在穿越不同区域后，不会发生改变，而3 类LSA 会发生变化",
      "D. 3 类LSA 在穿越不同区域后，不会发生改变，市而4 类LSA 和5 类LSA 会发生变化"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": "images/q061_expl.jpeg"
  },
  {
    "id": 62,
    "type": "single",
    "question": "RSTP 协议存在几种端口状态?",
    "questionImage": null,
    "options": [
      "A. 1",
      "B. 2",
      "C. 4",
      "D. 3"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": "images/q062_expl.jpeg"
  },
  {
    "id": 63,
    "type": "single",
    "question": "以下关于OSPF DD 报文的描述，正确的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 只有在Exchange 状态下传输的DD 报文才会携带链路状态信息",
      "B. OSPF 在交互DD 报文时，必须要确定主从关系Router ID 小的一方作为Master",
      "C. DD 报文携带完整的链路状态信息",
      "D. DD 报文出现在Exstart、Exchange 和Loading 三个阶段"
    ],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": "images/q063_expl.jpeg"
  },
  {
    "id": 64,
    "type": "single",
    "question": "当BGP 对等体关系建立后，通过Keepalive 报文维持BGP 对等体关系。默认情况下 Keepalive 报文的发送间隔是以下哪一项?",
    "questionImage": null,
    "options": [
      "A. 180 秒",
      "B. 90 秒",
      "C. 60 秒",
      "D. 150 秒"
    ],
    "answer": [
      2
    ],
    "explanation": "Keepalive 报文只包含BGP 消息头，没有附加其他字段，其发送间隔在Open 报文中 确定。默认情况下，Keepalive 报文的发送间隔是60 秒，超时时间为180 秒。",
    "explanationImage": null
  },
  {
    "id": 65,
    "type": "single",
    "question": "以下描述中属于EasyIP 特有的特征是哪一项?",
    "questionImage": null,
    "options": [
      "A. 当公网地址分配完之后剩余的私网地址不能再进行转换",
      "B. 在进行网络地址转换的时候不会转换端口号",
      "C. 每一个私有地址都具有一个公网地址与之对应转换",
      "D. 公网地址可以不固定"
    ],
    "answer": [
      3
    ],
    "explanation": "Easy-IP 不需要创建公网地址池。使用接口地址作为NAT 转换的共有地址。所以公 网地址可以不固定。",
    "explanationImage": null
  },
  {
    "id": 66,
    "type": "single",
    "question": "在宿舍、酒店和病房等房间密集的场景中，若每个房间都布放一个AP，会造成大量报 文上送到AC 容易造成AC 出现性能瓶颈。为了应对这种问题，可以采用以下哪一种组网 架构来部署?",
    "questionImage": null,
    "options": [
      "A. AC+FIT AP",
      "B. 敏捷分布式AP",
      "C. Leader AP",
      "D. FAT AP"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q066_expl.jpeg"
  },
  {
    "id": 67,
    "type": "single",
    "question": "OSPF 路由过滤不支持以下哪一种策略工具?",
    "questionImage": null,
    "options": [
      "A. Route-Policy",
      "B. ip as-path-filter",
      "C. ACL",
      "D. 前缀列表"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q067_expl.jpeg"
  },
  {
    "id": 68,
    "type": "single",
    "question": "以下关于前缀列表的描述，正确的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 前缀列表不仅能在BGP 中使用，还能在IGP 中使用",
      "B. 将前缀列表应用在端口上时，可以选定in 方向和out 方向",
      "C. 使用reset ip-prefix 命令能够重置前缀列表，以重新匹配路由",
      "D. 前缀列表匹配的是去往某一网段的路由，和ACL 的作用完全相同"
    ],
    "answer": [
      0
    ],
    "explanation": "前缀列表是一种用于匹配IP 前缀的过滤工具，它可以在外部网关协议（EGP）如 BGP 中使用，也可以在内部网关协议（IGP）如OSPF 和RIP 中使用，用于路由过滤和策 略控制",
    "explanationImage": null
  },
  {
    "id": 69,
    "type": "single",
    "question": "以下关于PIM-SM 中RP 的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 共享树里所有组的初始组播都通过RP 转发到接收者",
      "B. 一个RP 可以同时为多个组播组服务，",
      "C. 一个组播组能对应多个RP",
      "D. RP 可以负责几个或者所有组播组的转发",
      "E. 静态指定RP 时，需在网络中所有PIN 路由器上配置相同的IP 地址"
    ],
    "answer": [
      2
    ],
    "explanation": "错误选项是C，一个组播组只能对应一个 RP",
    "explanationImage": "images/q069_expl.jpeg"
  },
  {
    "id": 70,
    "type": "single",
    "question": "IGMPv2 使用独立的查询器选举机制，当共享网段上存在多个组播路由器时，以下哪一 项参数是查询器选举的条件?",
    "questionImage": null,
    "options": [
      "A. 优先级",
      "B. 接口IP 地址",
      "C. Loopback0 地址",
      "D. MAC 地址"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 71,
    "type": "single",
    "question": "以下关于IPv6 重复地址检测的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 接口在启用任何一个单播IPv6 地址前都需要先进行DAD，包括Link-Local 地址",
      "B. 若两个节点配置相同地址，同时作重复地址检测时，当一方收到对方发出的DAD NA 报文，则接收方将不启用该地址",
      "C. 在节点自动配置某个接口的IPV6 单播地址之前，必须在本地链路范围内验证要使用的地址是唯一的，并且未被其他节点使用过",
      "D. 一个地址在通过重复地址检测之前称为\"tentative 地址\"，此时该接口不能使用这个试验地址进行单播通讯"
    ],
    "answer": [
      1
    ],
    "explanation": "B 选项是发出的DAD NS 报文，不是发出的DAD NA 报文，其他的都是官方数据原 文知识点",
    "explanationImage": "images/q071_expl.jpeg"
  },
  {
    "id": 72,
    "type": "single",
    "question": "四台路由器运行IS-IS 且已经建立邻接关系，区域号和路由器的等级如图所示，以下描 述正确的是哪一 项?",
    "questionImage": "images/q072.jpeg",
    "options": [
      "A. R2 路由器的LSDB 中不存在R4 的LSP",
      "B. R3 路由器的LSDB 中不存在R4 的LSP",
      "C. R2 路由器的LSDB 中不存在R3 的LSP",
      "D. R1 路由器的LSDB 中不存在R4 的LSP"
    ],
    "answer": [
      3
    ],
    "explanation": "L1-2(R2)可以同时维护L1 和L2 的LSDB，因此R2 存在R1 和R3/R4 的LSP；R3 和R4 都属于L2，因此R3 路由器的LSDB 中存在R4 的LSP；R1 属于L1，只维护区域内 部路由，不存在R4 的 LSP",
    "explanationImage": "images/q072_expl.jpeg"
  },
  {
    "id": 73,
    "type": "single",
    "question": "某管理员需要创建AS_Path 过滤器(ip as-path-fiter)，允许AS_Path 中包含65001 的路 由通过，那么以下哪-项配置是正确的?",
    "questionImage": null,
    "options": [
      "A. ip as-path-filter 1 permit _65001 _",
      "B. ip as-path-filter 1 permit &#39;65001&#39;",
      "C. ip as-path-filter 1 permit ^65001^",
      "D. ip as-path-filter 1 permit ^65001_",
      "E. ip as-path-filter 1 permit ∗65001∗",
      "F. ip as-path-filter 1 permit $$65001$$"
    ],
    "answer": [
      0
    ],
    "explanation": "_ 表示匹配任意数量的字符，包括没有字符。^ 表示匹配行的开始$ 表示匹配行的结 束 * 表示匹配前面的子表达式零次或多次只有A 选项是符合包含65001 的路由通过",
    "explanationImage": null
  },
  {
    "id": 74,
    "type": "single",
    "question": "以下关于路由注入的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 外部路由引入到BGP 时，默认preference 为200",
      "B. OSPF NSSA 区域中的路由器将外部路由引入时默认的Metric-Type 为2",
      "C. 外部路由引入到IS-IS 中时，默认等级为Level-2",
      "D. OSPF 普通区域中的路由器将外部路由引入时默认的Metric-Type 为2，但是可以使用Route-Policy 工具修改Metric-Type"
    ],
    "answer": [
      0
    ],
    "explanation": "外部路由引入到BGP 时，默认preference 为255",
    "explanationImage": null
  },
  {
    "id": 75,
    "type": "single",
    "question": "在OSPF 网络中，OSPF Area 用于标识一个OSPF 区域。若某OSPF 区域ID 为Area 0.0.1.0，则等同于以下哪个Area ID?",
    "questionImage": null,
    "options": [
      "A. Area 1",
      "B. Area 255",
      "C. Area 256",
      "D. Area 10"
    ],
    "answer": [
      2
    ],
    "explanation": "Area 的值可以直接使用数字，或者用IP 地址的形式；Area 0.0.0.1 等同于Area 1， Area 0.0.0.255 等同于Area 255，Area 0.0.1.0 等同于Area 256",
    "explanationImage": null
  },
  {
    "id": 76,
    "type": "single",
    "question": "在OSPF 网络中，DROther 给DR/BDR 路由器发送DD 报文时，使用的组播地址是以下 哪一个?",
    "questionImage": null,
    "options": [
      "A. 224.0.0.6",
      "B. 224.0.0.2",
      "C. 224.0.0.1",
      "D. 224.0.0.5"
    ],
    "answer": [
      0
    ],
    "explanation": "DRother 产生的LSU 通过组播224.0.0.6 发报文给DR 和BDR",
    "explanationImage": null
  },
  {
    "id": 77,
    "type": "single",
    "question": "在RSTP 网络中，可通过配置交换机的STP 优先级来指定某台设备作为根桥。缺省情 况下，华为交换机的STP 优先级为以下哪一数值?",
    "questionImage": null,
    "options": [
      "A. 1",
      "B. 128",
      "C. 32768",
      "D. 4096"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": "images/q077_expl.jpeg"
  },
  {
    "id": 78,
    "type": "single",
    "question": "邻居发现协议NDP 是IPV6 协议体系中一个重要的基础协议，以下关于该协议的描 述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 可以使用三层的安全机制避免地址解析攻击",
      "B. 邻居发现协议可实现IPv4 中ARP 的功能",
      "C. 使用组播方式发送请求报文，减少了二层网络的性能压力",
      "D. 地址解析在二层完成，不同的二层介质采用相同的地址解析协议"
    ],
    "answer": [
      3
    ],
    "explanation": "地址解析在三层完成,不同的二层介质可以采用相同的地址解析协议。",
    "explanationImage": "images/q078_expl.jpeg"
  },
  {
    "id": 79,
    "type": "single",
    "question": "SSH 是一种安全的协议，可以为用户在非安全的网络上构建隧道，从而保障数据的安 全。以下关于用户通过SSH 方式登录设备的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 缺省情况下，SSH 服务器的端口号为23，可以修改SSH Server 的端口为非知名端口，减小被扫描攻击的概率",
      "B. SSH Server 支持认证，只有通过认证的用户才能登录设备",
      "C. 可以配置各个VTY 通道的ACL 过滤规则，通过ACL 控制允许登录的客户端IP",
      "D. 当开启SSH Server 服务器时，设备将开启Socket 获取服务，易被攻击者扫描。因此当不使用SSH Server 时，可以关闭SSH Server 和相应的端口号"
    ],
    "answer": [
      0
    ],
    "explanation": "SSH 服务器的端口号为22，telnet 服务器的端口号才是23",
    "explanationImage": null
  },
  {
    "id": 80,
    "type": "single",
    "question": "GRE 是一种VPN 封装技术，被广泛用于跨越异种网络的报文传输问题。以下关于该协 议的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. GRE 可以和其他VPN 协议联合使用来进一步保障数据安全",
      "B. GRE 是一种三层VPN 封装技术",
      "C. GRE 可以支持组播传输",
      "D. GRE 支持加密和认证"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": "images/q080_expl.jpeg"
  },
  {
    "id": 81,
    "type": "single",
    "question": "为了减少用户主机所在网段内的IGMP 协议报文数量，可以在二层设备上部署IGMP snooping proxy 功能，但是IGMP snooping proxy 对接收到的协议报文的处理方式并非完 全一致，以下关于该协议处理报文方式的描选，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 如果接收到的是IGMP 报告报文，会直接丢弃",
      "B. 如果接收到的是普遍组查询报文，会向本VLAN 内除接收接口以外的所有接口发送IGMP 普遍组查询报文",
      "C. 如果接收到的是IGMP 特定源组查询报文，会直接丢弃",
      "D. 如果接收到的是IGMP 特定组查询报文，会直接丢弃"
    ],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": "images/q081_expl.jpeg"
  },
  {
    "id": 82,
    "type": "single",
    "question": "IGMP Snooping 是组播协议中一个重要的协议，以下关于该协议的描述，错误的是哪一 项?",
    "questionImage": null,
    "options": [
      "A. IGMP Snooping 通过侦听三层组播设备和用户主机之间发送的组播协议报文来维护组播报文的出接口信息",
      "B. 设备运行了IGMP Snooping 后，收到不同的IGMP 协议报文会进行相同的处理",
      "C. IGMP Snooping 是二层组播协议",
      "D. 根据IGMP Snooping 建立的组播转发表项中包含路由器端口和成员端口"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q082_expl.jpeg"
  },
  {
    "id": 83,
    "type": "single",
    "question": "IPV4 无法支持以下哪一种地址类型?",
    "questionImage": null,
    "options": [
      "A. 组播",
      "B. 任播",
      "C. 单播",
      "D. 广播"
    ],
    "answer": [
      1
    ],
    "explanation": "IPV4 支持单播、组播、广播，IPV6 才支持任播。",
    "explanationImage": null
  },
  {
    "id": 84,
    "type": "single",
    "question": "MPLS VPN 网络一般由运营商搭建,VPN 用户购买VPN 服务来实现用户网络之间的数据 互通。在MPLS VPN 网络中存在诸多设备角色，其中以下哪一项设备角色是运营商网络中 的骨干路由器，不与CE 直接相连?",
    "questionImage": null,
    "options": [
      "A. Client",
      "B. Customer Edge",
      "C. Provider Edge",
      "D. Provider"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": "images/q084_expl.jpeg"
  },
  {
    "id": 85,
    "type": "single",
    "question": "IPv6 中定义了多种地址类型，以下关于这些地址的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 任播地址只能作为目的地址使用",
      "B. 链路本地地址可以采用EUI-64 方式快速生成",
      "C. 每个接口可以有多个网络前缀不同的全球单播地址",
      "D. 配置链路本地地址时，手工指定方式的优先级高于自动生成方式"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q085_expl.jpeg"
  },
  {
    "id": 86,
    "type": "single",
    "question": "在IS-IS 网络中，NET 的长度与NSAP 的相同，其组成部分也相同。其中，以下NET 所含字段中，用来在区域内唯一标识主机或路由器的是哪一项?",
    "questionImage": null,
    "options": [
      "A. Area Address",
      "B. IDI",
      "C. Svstem ID",
      "D. SEL"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": "images/q086_expl.jpeg"
  },
  {
    "id": 87,
    "type": "single",
    "question": "管理员在设备上通过as-path-fiter 定义了过滤器s1，并向BGP 邻居通告，具体配置如 下。配置完成后可以从邻居获取以下哪一种类型的路 由?",
    "questionImage": "images/q087.jpeg",
    "options": [
      "A. 只接收包含AS65500 的路由",
      "B. 只接收最后经过的自治系统为AS65500 的路由",
      "C. 只接收从AS65500 中转过来的路由",
      "D. 只接收AS65500 始发的路由"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": "images/q087_expl.jpeg"
  },
  {
    "id": 88,
    "type": "single",
    "question": "IP-Prefix 是路由策略中常用的匹配工具，在华为路由器配置IP-Prefix 时，其匹配项不 可能包含以下哪一项?",
    "questionImage": null,
    "options": [
      "A. 序号",
      "B. 端口号",
      "C. 掩码",
      "D. 动作"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q088_expl.jpeg"
  },
  {
    "id": 89,
    "type": "single",
    "question": "IGMP 有三个版本，不同版本支持的特性有所区别。以下哪一项是所有版本均支持的特 性?",
    "questionImage": null,
    "options": [
      "A. 成员离开报文",
      "B. 特定组查询报文",
      "C. 指定组播源",
      "D. 成员报告报文"
    ],
    "answer": [
      3
    ],
    "explanation": "三个版本均支持成员报告报文，其他机制的差异如下截图",
    "explanationImage": "images/q089_expl.jpeg"
  },
  {
    "id": 90,
    "type": "single",
    "question": "Wi-Fi 6 作为新一代无线技术，极大地提升了带宽速率，并提供了更高的性能。以下关 于Wi-Fi 6 特性的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 采用OFDMA 技术，实现高并发",
      "B. 速率高达9.6Gbps，提供大带宽",
      "C. 采用TWT 技术，降低终端耗电",
      "D. 零时延，保障业务高效运行"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": "images/q090_expl.jpeg"
  },
  {
    "id": 91,
    "type": "single",
    "question": "以下关于包过滤防火墙的描述中，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 包过滤防火墙认为报文之间没有任何关系，且不考虑报文会产生的结果",
      "B. 包过滤防火墙默认检查报文的目的IP 地址和目的端口号，对源IP 地址和源端口号不检查",
      "C. 包过滤防火墙，只要报文匹配到安全策略，则会按照安全策略定义的行为对报文进行处理:如果没有匹配，则会执行缺省包过滤",
      "D. 在USG 防火墙中，缺省包过滤是对所有报文都生效的缺省安全策略。默认情况下，缺省包过滤的动作是拒绝通过"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q091_expl.jpeg"
  },
  {
    "id": 92,
    "type": "single",
    "question": "以下关于常见动态路由协议的描述，正确的是哪一项?",
    "questionImage": null,
    "options": [
      "A. OSPF 运行在IP 协议基础之上，采用的协议号是90",
      "B. ISIS 运行在IP 协议基础之上，采用的协议号89",
      "C. BGP 邻居关系建立在TCP 会话基础之上的，采用的端口号是179",
      "D. BGP 运行在UDP 会话基础之上，采用的端口号是179"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 93,
    "type": "single",
    "question": "以下关于OSPF 的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 当OSPF 网络中有新的具有更大DR Priority 路由器加入时，则该新的路由器会抢占原来的",
      "B. DR Priority 一样时，RouterID 大者优先选举为DR",
      "C. 如果当前DR 故障，当前BDR 自动成为新的DR，网络中重新选举BDR",
      "D. DR Priority 值大的，优先选举为DR"
    ],
    "answer": [
      0
    ],
    "explanation": "非抢占的，具有更大DR Priority 路由器加入时，不会抢占原来的",
    "explanationImage": "images/q093_expl.jpeg"
  },
  {
    "id": 94,
    "type": "single",
    "question": "以下关于MP-BGP 的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. MP REACH NLRI 属于可选非过渡属性",
      "B. MP-BGP 支持单播路由，但是不支持组播路由",
      "C. 当两个PE 或ASBR 之间交换VPN 路由信息时，在Update 消息中携带MP_REACH_NLRI 属性",
      "D. MP-BGP 中引入了MP_REACH_NLRI 属性，用于发布可达路由及下一跳信息"
    ],
    "answer": [
      1
    ],
    "explanation": "MP-BGP 可以同时支持单播和组播模式，为两种模式构建不同的网络拓扑结构。当 两个PE 或ASBR 之间交换VPN 路由信息时，在Update 消息中携带MP_REACH_NLRI 属 性。MP_UNREACH_NLRI：Multiprotocol Unreachable NLRI，多协议不可达NLRI。用于撤 销不可达路由。属性是可选非过渡。",
    "explanationImage": null
  },
  {
    "id": 95,
    "type": "single",
    "question": "以下关于Route-Policy 中apply as-path 命令的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 使用apply as-path additive 命令一般可以调整使该路由不会被优先选择",
      "B. 使用apply as-path overwrite 命令，可以隐藏该路由真实的路径信息",
      "C. 使用apply as-path additive 命令会将原有的AS_Path 全部替换成设定的新AS_Path",
      "D. 使用apply as-path none overwrite 命令，可以清空AS_Path 信息"
    ],
    "answer": [
      2
    ],
    "explanation": "additive 是追加，不是替换",
    "explanationImage": "images/q095_expl.jpeg"
  },
  {
    "id": 96,
    "type": "single",
    "question": "在特殊场景下，BGP 在向IBGP 对等体通告路由时，需要把下一跳属性设为自身的IP 地址，从而防止路由黑洞。那么正确的配置命令应该是以下哪一项?",
    "questionImage": null,
    "options": [
      "A. peer mpls-local-ifnet",
      "B. peer next-hop-local",
      "C. peer next-hop-invariable",
      "D. peer private-nexthop"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q096_expl.jpeg"
  },
  {
    "id": 97,
    "type": "single",
    "question": "如图所示为某园区OSPF 网络，图中五台路由器相连接口均为CE 口没有更改开销值， 现工程师在R1 上执行了import-route 操作。等待网络收敛后，工程师在R4 上查看去往 服务器192.168.1.0/24 的路由条目时，其开销值应为以下哪一 项?",
    "questionImage": "images/q097.jpeg",
    "options": [
      "A. 4",
      "B. 2",
      "C. 3",
      "D. 1"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q097_expl.jpeg"
  },
  {
    "id": 98,
    "type": "single",
    "question": "边界网关协议BGP 是一种实现自治系统之间的路由可达的距离矢量路由协议，它基于 以下哪一项协议的端口号建立BGP 会话?",
    "questionImage": null,
    "options": [
      "A. TCP 170",
      "B. UDP 170",
      "C. TCP 179",
      "D. UDP 179"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 99,
    "type": "single",
    "question": "在BGP 中AS_Path 属性按矢量顺序记录了某条路由从本地到目的地址所要经过的所有 AS 编号，以下关于传递路由时该属性变化的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 当BGP Speaker 将这条路由通告给IBGP 对等体时，便会在Update 报文中创建一个空的AS_Path 列表",
      "B. 当BGP Speaker 将这条路由通告给EBGP 对等体时，便会把本地AS 编号添加在AS_Path 列表的最后面",
      "C. 当BGP Speaker 将这条路由通告到EBGP 对等体时，便会在Update 报文中创建一个携带本地AS 号的AS_Path 列表",
      "D. 当BGP Speaker 将这条路由通告给IBGP 对等体时，不会改变这条路由相关的AS_Path属性。"
    ],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 100,
    "type": "single",
    "question": "ACL 是路由常用匹配工具之一，并根据ACL 规则功能的不同将ACL 划分成多种类 型，且每类ACL 编号的取值范围不同。其中，编号范围为4000~4999，表示的是以下哪 一类型ACL?",
    "questionImage": null,
    "options": [
      "A. 用户ACL",
      "B. 二层ACL",
      "C. 基本ACL",
      "D. 高级ACL"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 101,
    "type": "single",
    "question": "如图所示，R1 将直连路由10.1.1.0/24 号1 入到了OSPF 中，现用户在R2 和R3 上 执行了双向路由重发布，并在R3 上配置了如下命令。当网络稳定后，用户在R4 上查看 路由表中的10.1.1.0/24 路由条目时，其Pre 值为以下哪一数 值?",
    "questionImage": "images/q101.jpeg",
    "options": [
      "A. 10",
      "B. 15",
      "C. 150",
      "D. 14"
    ],
    "answer": [
      1
    ],
    "explanation": "ISIS 不区分外部内部路由，ospf 引入进OSPF 的路由均为15 PRE",
    "explanationImage": null
  },
  {
    "id": 102,
    "type": "single",
    "question": "在VLAN Pool 中，用户可以在一个AP 上创建不同的VAP 为不同的用户群里提供无线 接入服务。如图所示为终端接入无线网络的流程，其中，VLAN Pool 给终端分配VLAN 发 生在以下哪一步 骤?",
    "questionImage": "images/q102.jpeg",
    "options": [
      "A. 2",
      "B. 3",
      "C. 1",
      "D. 4"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 103,
    "type": "single",
    "question": "Origin 属性用来定义BGP 路径信息的来源，一共有三种类型，存在优先级关系。以下 关于优先级关系的排序，正确的是哪一项?",
    "questionImage": null,
    "options": [
      "A. Incomplete&gt;IGP&gt;EGP",
      "B. EGP&gt;IGP&gt;Incomplete",
      "C. Incomplete&gt;EGP&gt;EGP",
      "D. IGP&gt;EGP&gt;Incomplete"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 104,
    "type": "single",
    "question": "在BGP 网络中，本地生成的路由可能存在多种途径，那么当本地存在多种途径学习到 相同BGP 路由时，优先级最高的是以下哪一项?",
    "questionImage": null,
    "options": [
      "A. 自动聚合路由",
      "B. network 命令引入的路由",
      "C. import-route 命令引入的路",
      "D. 手动聚合路由"
    ],
    "answer": [
      3
    ],
    "explanation": "手动聚合&gt;自动聚合&gt;network&gt;import",
    "explanationImage": null
  },
  {
    "id": 105,
    "type": "single",
    "question": "如图所示为某OSPF 网络，已知R1 和R2 已成功建立邻接关系，现工程师在R2 上配 置了图中命令。那么在R2 上查看路由表时，可能存在的路由条目是以下哪一 项?",
    "questionImage": "images/q105.jpeg",
    "options": [
      "A. 10.1.4.0/24",
      "B. 10.1.2.0/24",
      "C. 10.1.1.0/24",
      "D. 10.1.3.0/24"
    ],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 106,
    "type": "single",
    "question": "某华为路由器配置的IP-Prefix 如下所示，那么以下路由信息中，不能被匹配的是哪一 项?[huawei]ip ip-prefix test index 10 permit 10.0.0.0 8 less-equal 32",
    "questionImage": null,
    "options": [
      "A. 10.1.1.0/6",
      "B. 10.1.1.0/24",
      "C. 10.0.0.0/16",
      "D. 10.1.1.1/32"
    ],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 107,
    "type": "single",
    "question": "在缺省情况下，以下关于BGP 通告路由时下一跳地址的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. BGP 将本地始发路由发布给IBGP 对等体时，将下一跳属性设为自身与对等体相连的接口地址",
      "B. BGP 向EPGP 对等体通告路由时，将下一跳属性设为自身与对等体相连的接口地址",
      "C. BGP 从EBGP 向IBGP 对等体通告非标签路由时，将下一跳属性改为自身与对等体相连的接口地址",
      "D. BGP 从IBGF 向IBGP 对等体通告路由时，不改变下一跳属性"
    ],
    "answer": [
      2
    ],
    "explanation": " A 选项：正确。BGP 将本地始发路由发布给IBGP 对等体时，将下一跳属性设为自 身与对等体相连的接口地址。 B 选项：正确。BGP 向EBGP 对等体通告路由时，将下一跳属性设为自身与对等体 相连的接口地址。 C 选项：错误。BGP 从EBGP 向IBGP 对等体通告非标签路由时，不改变下一跳属 性，通告标签路由时，将下一跳属性改为自身与对等体相连的接口地址。 D 选项：正确。BGP 从IBGP 向IBGP 对等体通告路由时，不改变下一跳属性。",
    "explanationImage": null
  },
  {
    "id": 108,
    "type": "single",
    "question": "当BGP 邻居建立完成后，缺省情况下，设备每隔多少秒发送一次Keepalive 报文来保 持BGP 连接",
    "questionImage": null,
    "options": [
      "A. 30",
      "B. 60",
      "C. 180",
      "D. 10"
    ],
    "answer": [
      1
    ],
    "explanation": "keepalive:用于维持bgp 的邻居关系,每隔一段时间都会发送这个报文,时间间隔为60s 发送一次,180 秒没有收到回到则认为邻居实效,邻居断开",
    "explanationImage": null
  },
  {
    "id": 109,
    "type": "single",
    "question": "以下关于BGP 协议的描述，正确的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 当BGP 的邻居出口路由策略改变后，需要手工操作才会向该邻居重新发送Updata 消息",
      "B. 一台路由器上不能配置多个BGP 进程",
      "C. IGP 路由要想成为BGP 路由，只能通过network 命令",
      "D. Open 报文中仅含有BGP 报文头部"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 110,
    "type": "single",
    "question": "一个Route-Policy 由一个或多个节点构成，且一个Route-Policy 最多可配置多少节点?",
    "questionImage": null,
    "options": [
      "A. 4096",
      "B. 256",
      "C. 65535",
      "D. 1024"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 111,
    "type": "single",
    "question": "在BGP 网络中，可调用Route-Policy 修改路由属性，那么以下关于路由策略使用的描 述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 使用import 方式引入直连路由时，可调用Route-Policy，过滤不想发布的路由",
      "B. 在地址族视图下，通过peer 命令可以调用Route-Policy，修改所发布路由的本地优先级",
      "C. 使用import 方式引入OSPF 路由时，可调用Route-Policy，修改MED 缺省值",
      "D. 使用network 引入路由时，不可调用Route-Policy，修改引入路由的属性"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 112,
    "type": "single",
    "question": "CIST 和MSTI 都是根据优先级向量来计算的，这些优先级向量信息都包含在MST BPDU 中。其中，参与MSTI 计算的优先级向量中，优先级最高的是以下哪一项?",
    "questionImage": null,
    "options": [
      "A. 域根ID",
      "B. 根交换设备ID",
      "C. 外部路径开销",
      "D. 内部路径开销"
    ],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 113,
    "type": "single",
    "question": "BFD 进行单跳检测时，采用以下哪一项作为目的端口号?",
    "questionImage": null,
    "options": [
      "A. UDP 4784",
      "B. TCP 3784",
      "C. UDP 3784",
      "D. TCP 4784"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 114,
    "type": "single",
    "question": "在网络设备逻辑架构中，网络设备从逻辑上可以分为多个平面，但不包括以下哪一平 面?",
    "questionImage": null,
    "options": [
      "A. 数据平面",
      "B. 监控平面",
      "C. 控制平面",
      "D. 转发平面"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 115,
    "type": "single",
    "question": "如图所示，某企业管理员在配置BFD 检测两端设备链路故障时，误将两台设备的参数 配置成不同值。经过协商后R1 设备的TX 时间应该为以下哪 项?",
    "questionImage": "images/q115.jpeg",
    "options": [
      "A. 100 ms",
      "B. 无法协商成功，最终变为0",
      "C. 150 ms",
      "D. 200 mS"
    ],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 116,
    "type": "single",
    "question": "在实际部署BFD 时，除了部署正常功能以外还需要调整部分参数，以便更好的检测网 络状况。以下关于BFD 优化的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 将BFD 报文设置为高优先级报文后，优先保证BFD 报文的转发",
      "B. 为快速了解网络状况和性能需求，可以将设备BFD 报文发送间隔时间调最小",
      "C. 如果BFD 会话发生振荡，则与之关联的应用将会在主备之间顿繁切换。为避免这种情况的发生，可以配置BPD 会话的等待恢复时间TTR",
      "D. 在实际组网环境中，一些设备只根据BFD 会话是否Up 来启动流量切换。由于路由协议Up 的时间比接口uP 的时间晚，这样可能导致流量回切时查不到路由，从而导致流量丢失。因此，需要弥补路由协议uP 晚于接口up 的时间差"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 117,
    "type": "single",
    "question": "某企业管理员在设备上配置了SNMPv3 与网管通信，配置完毕后通过display trap buffer 命令可以査看到信息中心Trap 缓冲区中存在Trap 消息记录，但是网管设备没有收 到Trap 告警消息。那么导致该情况的原因，可能是以下哪一项?",
    "questionImage": null,
    "options": [
      "A. 设备配置的SMNP 版本与设备配置的Trap 消息发送版本不一致",
      "B. 网管侧和设备侧配置的团体名不一致",
      "C. 网管发送的报文太大，超过设备设置的阈值",
      "D. 网管侧使用的SNMPv3 密码配置错误"
    ],
    "answer": [
      0
    ],
    "explanation": "参见官方文档：",
    "explanationImage": "images/q117_expl.jpeg"
  },
  {
    "id": 118,
    "type": "single",
    "question": "华为防火墙默认在启用时会创建一些安全区域，那么以下哪一安全区域是用户自己创 建的?",
    "questionImage": null,
    "options": [
      "A. Local",
      "B. ISP",
      "C. DMZ",
      "D. Trust"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 119,
    "type": "single",
    "question": "MSTP 可将一个交换网络划分成多个域，每个域内形成多棵生成树，且生成树之间彼 此独立。以下关于MST 域的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 一个局域网可以存在多个MST 域，各MST 域之间在物理上直接或间接相连",
      "B. 用户可以通过MSTP 配置命令指定多台交换设备在同一个MST 域内",
      "C. 同一个MST 域内的交换设备可以配置不同的域名",
      "D. MST 域由交换网络中的多台交换设备以及它们之间的网段所构成"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 120,
    "type": "single",
    "question": "汇聚点RP 在组播网络中是一台重要的PIM 路由器，以下关于RP 的描述，错误的是 哪一项?",
    "questionImage": null,
    "options": [
      "A. 一个RP 只能为一个组播组服务",
      "B. 一个组播组只能对应一个RP",
      "C. 网络中的所有PIM 路由器都必须知道RP 的地址",
      "D. 如果采用静态RP，在网络中的所有PIM 路由器上需要配置相同的RP 地址"
    ],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 121,
    "type": "single",
    "question": "华为防火墙中安全区域的优先级数值越大代表优先级越高，默认情况下Trust 区域的 优先级是以下哪一项?",
    "questionImage": null,
    "options": [
      "A. 5",
      "B. 100",
      "C. 50",
      "D. 85"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 122,
    "type": "single",
    "question": "某企业管理员在日常运维时查看的VRRP 备份组信息如下，以下关于该回显信息的描 述，错误的是哪 项?",
    "questionImage": "images/q122.jpeg",
    "options": [
      "A. 该VRRP 备份组号为1",
      "B. 该备份组为管理VRRP 备份组",
      "C. 该备份组启用了抢占模式",
      "D. 该备份组启用了认证"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 123,
    "type": "single",
    "question": "PBR 是一种依据用户制定的策略进行路由选择的机制，主要分为接口PBR 和本地 PBR。以下针对接口PBR 和本地PBR 的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 本地PBR 在协议视图调用",
      "B. 本地PBR 仅对本地始发的报文起作用。",
      "C. 接口PBR 调用在接口下，仅对接口的入方向报文生效",
      "D. 接口PBR 仅对转发的报文起作用"
    ],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 124,
    "type": "single",
    "question": "边缘端口为RSTP 改进STP 不足所新增的端口角色，那么以下关于该端口角色的描 述，错误是哪一项?",
    "questionImage": null,
    "options": [
      "A. 该端口收到一个配置BPDU 报文后，依旧会处于Forwarding 状态。",
      "B. 该端口不参与RSTP 计算",
      "C. 该端口可从Discarding 直接进入Forwarding 状态",
      "D. 该端口的Up 和Down，不会引起网络拓扑的变动"
    ],
    "answer": [
      0
    ],
    "explanation": "边缘端口收到BPDU 报文后会失去边缘端口的特性，此时边缘端口最终的状态需要 根据实际拓扑进行计算，并不一定是Forwarding 状态",
    "explanationImage": null
  },
  {
    "id": 125,
    "type": "single",
    "question": "以下关于BFD 检测模式的描述，错误的是哪一项? 126.",
    "questionImage": null,
    "options": [
      "A. 异步模式是常用的BFD 检测模式",
      "B. 在异步模式下，系统之间会按照协商好的周期发送BFD 控制报文，如果某个系统在检测时间内没有收到对端发来的BFD 控制报文，就宣告BFD 会话的状态为Down",
      "C. 异步检测模式不支持回声功能",
      "D. 在查询模式下，BFD 会话建立后，系统就不再周期性发送BFD 控制报文"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 126,
    "type": "single",
    "question": "在部署VRRP 网络时需要注意一些特别事项，否则可能会造成网络不通。以下关于 VRRP 注意事项的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 不能手工配置VRRP 的虚拟MAC 地址",
      "B. 不同备份组之间的虚拟IP 地址不能重复",
      "C. VRRP 设备发送ARP 老化探测报文时，源IP 地址为虚拟IP 地址",
      "D. 同一备份组的交换机上必须配置相同的备份组号"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": "images/q126_expl.jpeg"
  },
  {
    "id": 127,
    "type": "single",
    "question": "VRRP 冗余备份方案实施的重要成份就是VRRP 路由器的优先级和抢占功能，以下关 于VRRP 备份方案的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 如果将VRRP 方案的模式修改为非抢占模式，只要master 设备没有出现故障，Backup设备即使随后被配置了更高的优先级也不会成为Master 设备",
      "B. 在抢占模式下，如果Backup 设备的优先级比当前Master 设备的优先级高，则主动将自己切换成Master",
      "C. Master 设备周期性地发送VRRP 通告报文，在VRRP 备份组中公布其配置信息，其中包含了优先级参数",
      "D. 创建的VRRP 设备即使为IP 地址拥有者，也需要参加选举，并不会收到接口up 的消息后就将自己状态直接切换至Master 状态"
    ],
    "answer": [
      3
    ],
    "explanation": "创建的VRRP 设备只要为IP 地址拥有者就可以直接称为master",
    "explanationImage": null
  },
  {
    "id": 128,
    "type": "single",
    "question": "某大型企业WLAN 网络拓扑图如下所示。用户数据转发方式为隧道转发，漫游为AC 间三层漫游，那么STA 漫游后的流量转发路径正确的是以下哪一 项?",
    "questionImage": "images/q128.jpeg",
    "options": [
      "A. STA-&gt;FAP-&gt;FAC-&gt;HAC-&gt;SW1-&gt;Internet",
      "B. STA-&gt;FAP-&gt;FAC-&gt;HAC-&gt;HAP-&gt;SW1-&gt;Internet",
      "C. STA-&gt;FAP-&gt;FAC-&gt;HAC-&gt;HAP-&gt;HAC-&gt;SW1-&gt;Internet",
      "D. STA-&gt;FAP-&gt;FAC-&gt;SW2-&gt;Internet"
    ],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 129,
    "type": "single",
    "question": "iMaster NCE-Fabric 是华为面向数据中心网络场景推出的控制系统，可以从多维度帮 助客户提升业务效率。但该控制器不具备以下哪一项功能?",
    "questionImage": null,
    "options": [
      "A. 管理",
      "B. 分析",
      "C. 控制",
      "D. 转发"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 130,
    "type": "single",
    "question": "路由器查找FIB 表时，会选择一个掩码最长的FIB 表项转发报文。其中，当表项中的 Flag 字段为以下哪参数时，表示该路由是网关路由，即下一跳为网关?",
    "questionImage": null,
    "options": [
      "A. S",
      "B. H",
      "C. G",
      "D. D"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 131,
    "type": "single",
    "question": "针对STP 的不足，RSTP 改变了配置BPDU 的格式，充分利用了STP 报文中的以下哪 一字段，明确了端口角色?",
    "questionImage": null,
    "options": [
      "A. PID",
      "B. Flag",
      "C. PVI",
      "D. BPDU Type"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 132,
    "type": "single",
    "question": "如图所示为某园区OSPF 网络，图中五台路由器相连接口均为GE 口且没有更改开销 值，现工程师在R1 上执行了import-route 操作。等待网络收敛后，工程师在R2 查看去 往服务器192.168.1.0/24 的路由条目时，其开销值应为以下哪一个？",
    "questionImage": "images/q132.jpeg",
    "options": [
      "A. 2",
      "B. 1",
      "C. 4",
      "D. 3"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": "images/q132_expl.jpeg"
  },
  {
    "id": 133,
    "type": "single",
    "question": "以下关于PBR 和Route-Policy 的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 两者若都配置了多个节点，则节点之间的关系均为&ldquo;或&rdquo;",
      "B. 两者若都配置了多个条件语句，则条件语句之间的关系均为&ldquo;与&rdquo;",
      "C. 两者若配置了多个节点，则均按照节点编号从大到小进行匹配",
      "D. 两者均可配置一个或多个节点"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 134,
    "type": "single",
    "question": "在配置BGP 时，apply as-path 命令可以用来在路由策略中配置改变BGP 路由的 AS_Path 属性的动作。如果管理员想用指定的AS 号覆盖原有AS_Path 列表，可以携带以 下哪一项参数进行配置？",
    "questionImage": null,
    "options": [
      "A. limit",
      "B. additive",
      "C. none",
      "D. overwrite"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 135,
    "type": "single",
    "question": "如图所示为某广播型IS-IS 网络，缺省情况下，四台路由器选R1 作为DIS。现将R2 的GE0/0/1 接口的dis-priority 修改为63，那么当网络稳定后，以下哪一台路由器会被选 为 DIS",
    "questionImage": "images/q135.jpeg",
    "options": [
      "A. R3",
      "B. R2",
      "C. R4",
      "D. R1"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 136,
    "type": "single",
    "question": "在OSPF 网络中，路由器通过交互LSA 学习全网的路由信息，当LSA 头部中LS Age 达到以下哪一数值时，这条LSA 会被删除?",
    "questionImage": null,
    "options": [
      "A. 1800 秒",
      "B. 1200 秒",
      "C. 3600 秒",
      "D. 600 秒"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 137,
    "type": "single",
    "question": "如图所示为某大型企业WLAN 网络的组网拓扑图，该组网中用户数据转发方式为直接 转发，漫游为AC 间三层漫游，且将家乡代理设置为HAC。那么在以上场景中，STA 漫游 后的数据转发路径正确的是哪一 项?",
    "questionImage": "images/q137.jpeg",
    "options": [
      "A. STA-&gt;FAP-&gt;FAC-&gt;HAC-&gt;HAP-&gt;HAC-&gt;SW1-&gt;Internet",
      "B. STA-&gt;FAP-&gt;FAC-&gt;SW2-&gt;Internet",
      "C. STA-&gt;FAP-&gt;FAC-&gt;HAC-&gt;HAP-&gt;SW1-&gt; Internet",
      "D. STA-&gt;FAP-&gt;FAC-&gt;HAC-&gt;SW1-&gt;Internet"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": "images/q137_expl.jpeg"
  },
  {
    "id": 138,
    "type": "single",
    "question": "在IPv6 中NDP 使用多种ICMPv6 报文，其中RS 报文用于以下哪一项功能?",
    "questionImage": null,
    "options": [
      "A. 重复地址检",
      "B. 前缀重编址",
      "C. 重定向",
      "D. 地址解析"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 139,
    "type": "single",
    "question": "BGP 设备在收到邻居发送过来的路由中携带了一个不识别的属性，但是不确定其他设 备是否需要，因此在通告给其他对等体的时候仍然携带该属性，以下哪一项属性属于此类 型?",
    "questionImage": null,
    "options": [
      "A. Originator_ID",
      "B. MED",
      "C. AS_Path",
      "D. Community"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 140,
    "type": "single",
    "question": "以太网传输IPv4 单播报文的时候，目的MAC 地址也是组播MAC 地址。如果组播组 的IP 地址为224.0.1.1，那么对应的组播MAC 地址应该为以下哪一项?",
    "questionImage": null,
    "options": [
      "A. 01-00-5e-01-01-00",
      "B. 01-00-5e-01-01-01",
      "C. 01-00-5e-00-01-01",
      "D. 01-00-5e-00-01-00"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 141,
    "type": "single",
    "question": "某大型企业采用N+1 备份的组网方式部署WLAN 网络，该场景中，主备AC 的切换 是由AP 决定的。缺省情况下，当AP 在多少秒内未收到主用AC 发送的CAPWAP 心跳检 测报文，就会触发主备切换",
    "questionImage": null,
    "options": [
      "A. 150",
      "B. 75",
      "C. 100",
      "D. 90"
    ],
    "answer": [
      0
    ],
    "explanation": "默认心跳报文发送间隔均为25 秒。在N+1 备份方式下，默认6 次(即150 秒内未收 到)没收到心跳报文则触发主备切换;在双链路热备份方式下，默认3 次(即150 秒内未收 到)没收到心跳报文则触发主备切换",
    "explanationImage": null
  },
  {
    "id": 142,
    "type": "single",
    "question": "如图所示为某企业的WLAN 网络拓扑图，该组网用户数据转发方式为直接转发，用户 漫游过程为AC 间二层漫游。那么STA 漫游后数据转发路径应为以下哪一 项?",
    "questionImage": "images/q142.jpeg",
    "options": [
      "A. STA-&gt;FAP-&gt;SW2-&gt;FAC-&gt;HAC-&gt;SW1-&gt;Internet",
      "B. STA-&gt;FAP-&gt;SW2-&gt;Internet",
      "C. STA-&gt;FAP-&gt;SW2-&gt;FAC-&gt;HAC-&gt;SW1-&gt;HAP-&gt;HAC-&gt;SW1-&gt;Internet",
      "D. STA-&gt;FAP-&gt;SW2-&gt;FAC-&gt;HAC-&gt;SW1-&gt;HAP-&gt;SW1-&gt;Internet"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 143,
    "type": "single",
    "question": "VRRP 在选举完后通过发送通告报文来检测设备是否发生故障，缺省情况下，VRRP 通告间隔时间为多少秒?",
    "questionImage": null,
    "options": [
      "A. 5 秒",
      "B. 1 秒",
      "C. 10 秒",
      "D. 3 秒"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 144,
    "type": "single",
    "question": "某企业管理员在部署VRRP 网络时，设置的虚拟IP 地址为192.168.1.254，VRID 为 1。则网络稳定后虚拟MAC 地址应该是以下哪一项?",
    "questionImage": null,
    "options": [
      "A. 0000-5e00-0254",
      "B. 0000-5e01-0254",
      "C. 0000-5e00-0101",
      "D. 0000-5e01-0101"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 145,
    "type": "single",
    "question": "某企业采用华为路由器部署IS-IS 网络，实现全网通信，现工程师想修改接口开销 值，控制路由选路。那么缺省情况下，可配置的最大开销值是为以下哪一数值?",
    "questionImage": null,
    "options": [
      "A. 63",
      "B. 68",
      "C. 67",
      "D. 64"
    ],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 146,
    "type": "single",
    "question": "VPN 的类型非常丰富，可以应用在不同层次中。其中SSL VPN 属于以下哪一网络层次 的VPN?",
    "questionImage": null,
    "options": [
      "A. 网络层",
      "B. 数据链路层",
      "C. 传输层",
      "D. 应用层"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 147,
    "type": "single",
    "question": "访问控制列表是路由策略常用的匹配工具之一，华为路由器配置数字型ACL 时，必须 配置以下哪一参数?",
    "questionImage": null,
    "options": [
      "A. 匹配动作permit 或deny",
      "B. source",
      "C. 通配符",
      "D. rule-id"
    ],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 148,
    "type": "single",
    "question": "以下哪一种团体属性可以使设备在收到具有此属性的路由后，向任何BGP 对等体发送 该路由?",
    "questionImage": null,
    "options": [
      "A. Internet",
      "B. No_Advertise",
      "C. No_Export",
      "D. No_Export_Subconfed"
    ],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 149,
    "type": "single",
    "question": "在广播型IS-IS 网络中，需要选举DIS，其功能是创建并更新伪节点。缺省情况下， IS-IS 接口的DIS 优先级为以下哪一数值?",
    "questionImage": null,
    "options": [
      "A. 1",
      "B. 200",
      "C. 100",
      "D. 64"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 150,
    "type": "single",
    "question": "某MSTP 网络中，四台交换机为实现负载分担，创建了多个MSTP 实例。完成配置 后，用户分别在四台交换机上执行命令display stp brief，其回显信息如图所示。那么以下 关于该网络的描述，正确的是哪一 项?",
    "questionImage": "images/q150.jpeg",
    "options": [
      "A. SW1 为MSTI 1 的根桥",
      "B. SW3 的thernet0/0/1 端口角色为边缘端口",
      "C. 用户共创了三个MSTP 实例",
      "D. SW2 的GigabitEthernet0/0/2 端口无法转发数据"
    ],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 151,
    "type": "single",
    "question": "BGP 联盟可以解决AS 内部中IBGP 网络连接激增的问题，因此被广泛应用。以下关 于该属性的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 配置联盟后，可以保留原有的IBGP 属性",
      "B. 联盟外部AS 仍认为联盟是一个AS",
      "C. 配置联盟后，原AS 号将作为每个路由器的联盟ID",
      "D. 联盟将一个AS 划分为若干个子AS，每个子AS 内部建立EBGP 全连接关系"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 152,
    "type": "single",
    "question": "在OSPF 网络中，可通过”隐式确认\"来确保DD 报文传输的可靠性和完整性，该功能 主要是通过DD 报文中以下哪一字段实现的?",
    "questionImage": null,
    "options": [
      "A. MS",
      "B. M",
      "C. I",
      "D. DD sequence number"
    ],
    "answer": [
      3
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 153,
    "type": "single",
    "question": "OSPF 一共定义了五种类型的报文，但不同类型的OSPF 报文有相同的头部格式。其 中，若报文头部中的Auth Type 字段为1，则表示以下哪一含义?",
    "questionImage": null,
    "options": [
      "A. 简单的明文密码认证",
      "B. HASH 认证",
      "C. 不认证",
      "D. MD5 认证"
    ],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 154,
    "type": "single",
    "question": "在广播型IS-IS 网络中，需要选举一个DIS 来创建和更新伪节点。如图所示为某广播 型IS-IS 网络，在该场最下会被选举为DIS 的是哪一台路由 器?",
    "questionImage": "images/q154.jpeg",
    "options": [
      "A. R1",
      "B. R2",
      "C. R3",
      "D. R4"
    ],
    "answer": [
      2
    ],
    "explanation": "优先级最高的R3 会被选举为DIS 同一网段上，接口DIS 优先级高的 lS(Intermediate System)优选。如果优先级相同，则接口的MAC 地址大的IS 优选。 接口DIS 的优先级可以通过isis dis-priority priority-value 命令配置，值越大表示 优先级越高。",
    "explanationImage": null
  },
  {
    "id": 155,
    "type": "single",
    "question": "某工程师在日常运维时发现两台设备的Hold Time 参数不一致，此时会发生以下哪一 种情况？",
    "questionImage": null,
    "options": [
      "A. 正常建立，协商Hold Time 值取最小值",
      "B. 正常建立，设备各自用自己的参数值发送报文",
      "C. 无法建立建立关系",
      "D. 正常建立，协商Hold Time 值取最大值"
    ],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 156,
    "type": "single",
    "question": "如图所示为某IS-IS 网络，R1、R2 和R3 接口均为GE 口，R1 将网段10.0.1.1/32 宣 告进IS-IS 网络。那么缺省情况下，R3 到达10.0.1.1/32 的开销值为以下哪一数 值?",
    "questionImage": "images/q156.jpeg",
    "options": [
      "A. 2",
      "B. 20",
      "C. 3",
      "D. 30"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q156_expl.jpeg"
  },
  {
    "id": 157,
    "type": "single",
    "question": "以下关于防火墙会话表机制的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 会话快速老化功能对长连接会话也生效",
      "B. 通常情况下，可以直接使用系统缺省的会话老化时间，如果需要修改，需要首先对实际网络中流量的类型和连接数作出估计和判断",
      "C. 状态检测机制关闭时，非首包也可以建立会话表，所以此时不需使用长连接功能也可保持业务的正常运行",
      "D. 对于一个已经建立的会话表项，只有当它不断被报文匹配才有存在的必要"
    ],
    "answer": [
      0
    ],
    "explanation": "长连接是用于部分特殊业务，规避会话快速老化问题",
    "explanationImage": "images/q157_expl.jpeg"
  },
  {
    "id": 158,
    "type": "single",
    "question": "以下关于IGMPv1 和IGMPv2 的描述，错误的是哪一项？",
    "questionImage": null,
    "options": [
      "A. IGMPv1 支持普遍组查询",
      "B. IGMPv2 报文类型包括成员离开报文",
      "C. IGMPv2 不支持特定组查询",
      "D. IGMPv1 报文类型不包含成员离开报文"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": "images/q158_expl.jpeg"
  },
  {
    "id": 159,
    "type": "single",
    "question": "某企业网络中，两台OSPF 路由器直连接口不在同一网段，且掩码不同。针对以上场 景中的两台路由器，若想成功建立OSPF 邻居关系，则可将直连接口修改为以下哪一网络 类型?",
    "questionImage": null,
    "options": [
      "A. Broadcast",
      "B. Point-to-point",
      "C. NBMA",
      "D. P2MP"
    ],
    "answer": [
      1
    ],
    "explanation": "Point-to-point 的网络类型用于两个路由器之间的直接连接，而且不需要在同一网 段，也不需要相同的子网掩码",
    "explanationImage": null
  },
  {
    "id": 160,
    "type": "single",
    "question": "当报文经过防火墙时，防火墙会为其创建相关的会话连接，从而指导后续报文转发。 但是防火墙并非会为所有的报文都建立会话，那么以下哪一项报文到达防火墙时，防火墙 不会为其创建会话表项？",
    "questionImage": null,
    "options": [
      "A. GRE 报文",
      "B. ICMP ping 报文",
      "C. 分片后续片报文",
      "D. UDP 报文"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 161,
    "type": "single",
    "question": "大规模的网络中，BGP 路由表十分庞大，给设备造成了很大的负担，因此一般都需要 配置路由聚合。以下关于BGP 路由聚合的描述，错误的是哪一项?",
    "questionImage": null,
    "options": [
      "A. 手动聚合无法控制聚合路由的属性",
      "B. 自动聚合是指BGP 将按照自然网段聚合路由",
      "C. IPv6 网络中仅支持手动聚合方式",
      "D. 为了避免路由聚合可能引起的路由环路，BGP 设计了AS_Set 属性"
    ],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 162,
    "type": "single",
    "question": "一台路由器的FIB 表如下所示，当收到一个目的地址是10.9.1.2 的报文时，会从以下 哪一个接口转发该报 文?",
    "questionImage": "images/q162.jpeg",
    "options": [
      "A. GigabitEthernet3/0/0",
      "B. GigabitEthernet2/0/0",
      "C. GigabitEthernet1/0/0",
      "D. GigabitEthernet4/0/0"
    ],
    "answer": [
      1
    ],
    "explanation": "根据最长匹配原则，会从GE2/0/0 接口转发出去",
    "explanationImage": null
  },
  {
    "id": 163,
    "type": "single",
    "question": "某台路由器使用高级ACL 过滤数据，其配置命令如下所示。那么以下关于该配置的描 述，错误的是哪一项?[Huawei] acl 3001[Huawei-acl-adv-3001] rule permit icmp source 192.168.1.3 0 destination 192. 168.2.0 0.0.0.255",
    "questionImage": null,
    "options": [
      "A. 该ACL 允许主机192.168.1.3 去往192.168.2.0/24 网段的IP 报文通过",
      "B. 该ACL 允许主机192.168.1.3 去往192.168.2.200 主机的ICMP 报文通过",
      "C. 该ACL 不允许主机192.168.1.2 去往192.168.2.0/24 网段的ICMP 报文通过",
      "D. 该ACL 为数字型ACL，编号为3001"
    ],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": "images/q163_expl.jpeg"
  },
  {
    "id": 164,
    "type": "single",
    "question": "在OSPF 的MA 网络中，网络设备需要选举DR/BDR，在2-way 状态下需要多少秒的 选举时间?",
    "questionImage": null,
    "options": [
      "A. 10 秒",
      "B. 20 秒",
      "C. 40 秒",
      "D. 30 秒"
    ],
    "answer": [
      2
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 165,
    "type": "single",
    "question": "组播中，缺省情况下IGMP 普通组查询间隔默认为多少秒？",
    "questionImage": null,
    "options": [
      "A. 30",
      "B. 60",
      "C. 10",
      "D. 90"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q165_expl.jpeg"
  },
  {
    "id": 166,
    "type": "single",
    "question": "在IPSec 中，SA 是由一个三元组来唯一标识的。那么以下哪一参数不属于SA 的三元 组信息?",
    "questionImage": null,
    "options": [
      "A. 密钥交换协议",
      "B. 安全协议号",
      "C. 目的IP 地址",
      "D. SPI"
    ],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": "images/q166_expl.jpeg"
  },
  {
    "id": 167,
    "type": "multiple",
    "question": "三台路由器运行IS-IS 且已经建立邻接关系，区域号和路由器的等级如图中标记，如 果R1 和R2 之间的路中断，下列说法正确的有？",
    "questionImage": "images/q167.jpeg",
    "options": [
      "A. R1 将R2 生成的LSP 的Age 设置为0",
      "B. R3 路由表中的缺省路由会消失",
      "C. R1 运行SPF 算法将R2 从SPF 树干中删除",
      "D. R3 路由表中的缺省路由仍然存在"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": "R1 无法修改R2 产生的LSP；R1 没有Level-2 的邻居关系无法ATT 置位。",
    "explanationImage": null
  },
  {
    "id": 168,
    "type": "multiple",
    "question": "以下关于MSTP 的描述，正确的是哪些项？",
    "questionImage": null,
    "options": [
      "A. MSTP 支持与RSTP 兼容运行",
      "B. MSTP 可以实现流量在不同VLAN 之间的负载分担",
      "C. 相较于RSTP，MSTP 的端口角色更多",
      "D. MSTP 的BPDU 格式与RSTP 相同"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "MSTP 的BPDU 中，存在MSTI 配置信息，而RSTP 的BPDU 中没有。所以“MSTP 的 BPDU 格式与RSTP 相同”是错误的。其余选项都对",
    "explanationImage": null
  },
  {
    "id": 169,
    "type": "multiple",
    "question": "以下关于VRRP 协议版本的描述，正确的是哪些项？",
    "questionImage": null,
    "options": [
      "A. VRRPv2 仅适用于IPv4",
      "B. VRRPV3 仅适用于IPv6",
      "C. VRRPv3 不支持认证",
      "D. VRRPv2 支持认证"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q169_expl.jpeg"
  },
  {
    "id": 170,
    "type": "multiple",
    "question": "以下关于VRRP 定时器的描述，错误的是哪些项？",
    "questionImage": null,
    "options": [
      "A. Skew_Time=(255-Priority)/255",
      "B. 缺省情况下，VRRP 抢占延时是1 秒",
      "C. MASTER DOWN =(3*ADVER_INTERVAL)+Skew_time",
      "D. 缺省情况下，VRRP 通告报文的时间周期是2 秒"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q170_expl.jpeg"
  },
  {
    "id": 171,
    "type": "single",
    "question": "以下关于大型WLAN 三层组网中，DHCP 服务器的描述，错误的是？",
    "questionImage": null,
    "options": [
      "A. 在大型WLAN 组网中，AP 可以通过option60 参数从DHCP 服务器来获取AC 的IP 地址",
      "B. 在大型WLAN 组网中，AP 可以通过option43 参数从DHCP 服务器来获取AC 的IP 地址",
      "C. 在大型WLAN 组网中，建议部署独立的DHCP 服务器",
      "D. 在大型WLAN 组网中，一般建议使用AC 作为DHCP 服务器"
    ],
    "answer": [
      0
    ],
    "explanation": "AP 通过option 43 参数从DHCP 服务器来获取AC 的IP 地址。大型WLAN 组网中， AC 的业务流量会变大，因此建议部署独立的DHCP 服务器。",
    "explanationImage": null
  },
  {
    "id": 172,
    "type": "multiple",
    "question": "以下哪些技术支持流量统计？",
    "questionImage": null,
    "options": [
      "A. Netstream",
      "B. SNMP",
      "C. 端口镜像",
      "D. IP 报文计数"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q172_expl.jpeg"
  },
  {
    "id": 173,
    "type": "multiple",
    "question": "作为网络管理员，可以使用下列哪些协议用于网络设备配置？",
    "questionImage": null,
    "options": [
      "A. LLDP",
      "B. SNMP",
      "C. NETCONF",
      "D. SSH"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q173_expl.jpeg"
  },
  {
    "id": 174,
    "type": "multiple",
    "question": "以下关于Filter-Policy 的描述，正确的是哪些项？",
    "questionImage": null,
    "options": [
      "A. Filter-Policy 既能在OSPFv2 上使用，也能在OSPFv3 上使用",
      "B. 在距离矢量协议中，因为设备之间传递的就是路由信息，所以Filter-Policy 能够直接对路由生效",
      "C. 在链路状态路由协议中，路由表是通过LSDB 生成的，所以Filter-Policy 实质上是过滤LSDB 中的LSA",
      "D. 在距离矢量协议中，如果要过滤掉从上游设备到下游设备的路由，需要在下游设备配置filter-policy export 即可"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Filter-policy 对计算出来的路由进行过滤，不是对发布和接收的LSA 进行过滤。在距 离矢量协议中，如果要过滤掉从上游设备到下游设备的路由，需要在下游设备配置filter- policy import 即可。",
    "explanationImage": null
  },
  {
    "id": 175,
    "type": "multiple",
    "question": "以下关于OSPF 的描述，哪些项是正确的？",
    "questionImage": null,
    "options": [
      "A. 第二类外部路由的开销值只是AS 外部开销值，忽略AS 内部开销值",
      "B. AS-External-LSA 描述的是路由器到ASBR 的路径",
      "C. AS-External-LSA 描述到AS 外部路由的路径，泛洪的范围是AS 外部",
      "D. AS-External-LSA 可以泛洪到OSPF 任何区域",
      "E. AS-External-LSA 不属于任何区域"
    ],
    "answer": [
      0,
      4
    ],
    "explanation": "Type-5 LSA 可以泛洪到整个AS 内部，但不能泛洪到Stub 区域、Totally Stub 区 域、NSSA 区域和Totally NSSA 区域中",
    "explanationImage": null
  },
  {
    "id": 176,
    "type": "multiple",
    "question": "一条前缀列表必须包括以下哪些参数？",
    "questionImage": null,
    "options": [
      "A. 作用端口",
      "B. 端口号",
      "C. 动作",
      "D. 序号",
      "E. IP 网段与掩码",
      "F. 协议号"
    ],
    "answer": [
      2,
      4
    ],
    "explanation": "如下命名格式截图，带中括号[]里面的参数都是可选的，只有CE 是必配的",
    "explanationImage": "images/q176_expl.jpeg"
  },
  {
    "id": 177,
    "type": "multiple",
    "question": "以下关于BGP 中MED 属性值的描述，错误的是哪些项?",
    "questionImage": null,
    "options": [
      "A. MED 值默认为100",
      "B. 如果路由器将本地直连和静态路由通过network 或import-route 的方式引入BGP，那么这条BGP 路由的MED 为0",
      "C. MED 属性值越大则BGP 路由越优",
      "D. MED 主要用于在AS 之间影响BGP 的选路"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "缺省情况下，MED 的值为0，MED 表示开销值，MED 属性值越大就越不优先",
    "explanationImage": null
  },
  {
    "id": 178,
    "type": "multiple",
    "question": "以下关于IGMP SSM Mapping 的描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. SSM 组播组的地址是232.0.0.0~232.255.255.255",
      "B. IGMP SSM Mapping 收到IGMPv3 的报告报文也正常处理",
      "C. IGMP SSM Mapping 通过静态的将组播源与组播组进行绑定，使得IGMPv1 与IGMPv2的组成员也能接入SSM 组播网络",
      "D. 如果路由器上没有组播组地址对应的SSM Mapping 静态映射关系，则收到该报告报文时会丢弃该报文"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": null,
    "explanationImage": "images/q178_expl.jpeg"
  },
  {
    "id": 179,
    "type": "multiple",
    "question": "在STP 网铬中，选举指定端口时，会比较以下哪些参数？",
    "questionImage": null,
    "options": [
      "A. RPC",
      "B. 对端PID 和本端PID",
      "C. 本端BID 和本端PID",
      "D. 对端BID"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "RPC 是根路径开销，选举指定端口是本端BID 和本端PID，根端口才是对端",
    "explanationImage": "images/q179_expl.jpeg"
  },
  {
    "id": 180,
    "type": "multiple",
    "question": "以下哪些工具不只用于BGP 路由协议?",
    "questionImage": null,
    "options": [
      "A. route-policy",
      "B. ip-prefix",
      "C. community-filter",
      "D. extcommunity-filter",
      "E. ACL",
      "F. as-path-filter"
    ],
    "answer": [
      0,
      1,
      4
    ],
    "explanation": "ACL、ip-prefix route-policy 可用于OSPF、ISIS、BGP 等路由协议做路由选择工具",
    "explanationImage": null
  },
  {
    "id": 181,
    "type": "multiple",
    "question": "用路由策略进行路由过滤时，以下选项中的哪些路由前缀，在匹配图中的IP-Prefix 时 会被deny 掉?",
    "questionImage": "images/q181.jpeg",
    "options": [
      "A. 1.1.1.1/26",
      "B. 1.1.1.2/16",
      "C. 1.1.1.1/32",
      "D. 1.1.1.1/24"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": "ip-prefix 节点10 的配置是掩码允许通过大于等于26 小于等于32 的网络，其他的 就被默认deny 掉",
    "explanationImage": null
  },
  {
    "id": 182,
    "type": "single",
    "question": "如图所示的OSPF 网络，R1 和R2 之间通过四条链路相连，R2 的Loopback0 接口开 启OSPF，在R1 的OSPF 进程中配置“maximum load-balancing 3”命令，则R1 到达R2 的 Loopback0 接囗的出接口为以下哪一 项?",
    "questionImage": "images/q182.jpeg",
    "options": [
      "A. GE0/0/0",
      "B. GE0/0/2.10",
      "C. GE0/0/1",
      "D. GE0/0/2.20"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q182_expl.jpeg"
  },
  {
    "id": 183,
    "type": "multiple",
    "question": "在OSPF 网络中，OSPF 根据链路层协议类型，将网络分为了四种类型。其中，不需要 选举DR/BDR 的是以下哪些网络类型?",
    "questionImage": null,
    "options": [
      "A. Broadcast",
      "B. P2MP",
      "C. P2P",
      "D. NBMA"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": null,
    "explanationImage": "images/q183_expl.jpeg"
  },
  {
    "id": 184,
    "type": "multiple",
    "question": "以下场景中，两台直连华为路由器，配置IS-IS 路由协议后肯定不能成功建立邻接关 系的有哪些项?",
    "questionImage": null,
    "options": [
      "A. 两台路由器均为Level-2 路出器，但Are Address 不同",
      "C. 两台路由器一台为Level-1 路由器，另一台为Level-2 路由器",
      "D. 两台路由器均为Level-1 路由器，且Are Address 不同",
      "F. 两台路由器均为Level-2 路由器，AreaAddress 相同，且相连接口处于同一网段"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": null,
    "explanationImage": "images/q184_expl.jpeg"
  },
  {
    "id": 185,
    "type": "multiple",
    "question": "在BGP 中MED 属性是一种度量值，用于向外部对等体指出进入本AS 的首选路径。 以下关于该属性的描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. MED 属性值越小则BGP 路由越优",
      "B. 缺省情况下，只要路由的目的相同，路由器可以比较来自不同AS 的MED 值",
      "C. 在IBGP 对等体之间传递路由时，MED 值会被保留并传递，除非部署了策略，否则MED 值在传递过程中不发生改变也不会丢失",
      "D. MED 被传递给EBGP 对等体后，对等体在其AS 内传递路由时，携带该MED 值"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q185_expl_1.jpeg"
  },
  {
    "id": 186,
    "type": "multiple",
    "question": "在MA 网络中，OSPF 会通过选举DR/BDR 减少邻接关系。那么以下关于DR/BDR 选 举的描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. 若接口的DR 优先级相同，则比较RouterD，数值越小越优",
      "B. DR/BDR 的选举是基于接口的，接口的DR 优先级数值越大越优",
      "C. 若直连的两台路由器的接口DR 优先级均设置为0，则会导致这两台路由器无法建立邻接关系",
      "D. DR/BDR 的选举是抢占式的，抢占时间为15 秒"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": "将两边router 的dr 优先级都设为0，这时，两个路由器都不参与选举，也就是 DRother，在DRother 之间只建立邻居关系（2-way），不建立邻接关系。",
    "explanationImage": "images/q186_expl.jpeg"
  },
  {
    "id": 187,
    "type": "multiple",
    "question": "某园区网络中，全网运行IS-IS 路由协议，现工程师在某一台设备上查看LSDB 的详细 信息如下所示。那么根据回显信息，以下描述正确的是哪些 项?",
    "questionImage": "images/q187.jpeg",
    "options": [
      "A. 该LSP 中描述了2 个网段信,息",
      "B. 该LSP 来源的区域号为49.0123",
      "C. 该LSP 是伪节点生成的",
      "D. 该LSP 源节点的系统ID 为0100.0000.1001.00"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q187_expl.jpeg"
  },
  {
    "id": 188,
    "type": "multiple",
    "question": "BGP 协议本身不发现路由，因此需要将其他路由引入到BGP 路由表，实现AS 间的路 由互通。其中import 方式是按协议类型将路由引入到BGP 路由表中，那么Import 支持 将以下哪些路由引入到BGP 路由表中?",
    "questionImage": null,
    "options": [
      "A. IS-IS",
      "B. 直连",
      "C. Static",
      "D. OSPF"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q188_expl.jpeg"
  },
  {
    "id": 189,
    "type": "multiple",
    "question": "根据使用算法不同，路由协议可分为距离矢量协议和链路状态协议。那么以下哪些路 由协议属于链路状态协议?",
    "questionImage": null,
    "options": [
      "A. BGP",
      "B. RIP",
      "C. IS-IS",
      "D. OSPF"
    ],
    "answer": [
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q189_expl.jpeg"
  },
  {
    "id": 190,
    "type": "multiple",
    "question": "在OSPF 网络中，不同设备角色产生的LSA 种类不同，其描述的含义也有所不同。其 中，角色仅为ASBR 的路由器不可能产出以下哪些类型的LSA?",
    "questionImage": null,
    "options": [
      "A. 7 类LSA",
      "B. 2 类LSA",
      "C. 4 类LSA",
      "D. 3 类LSA"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": "角色仅为ASBR 的路由器会产生1 类、5 类和7 类，也可能产生2 类(如果是DR 的 话)。ASBR 均不会产生3、4 类的 LSA",
    "explanationImage": "images/q190_expl.jpeg"
  },
  {
    "id": 191,
    "type": "multiple",
    "question": "到目前为止，IGMP 有三个版本。以下哪些是IGMP 三个版本中都存在的报文?",
    "questionImage": null,
    "options": [
      "A. 特定组查询报文",
      "B. 成员报告报文",
      "C. 成员离开报文",
      "D. 普遍组查询报文"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": "IGMPv1 中定义了基本的普遍组查询报文和成员报告报文，IGMPv2 在此基础上添加 了查询器选举和组成员离开的机制，IGMPv3 中增加的主要功能是成员可以指定接收或指 定不接收某些组播源的报文。",
    "explanationImage": null
  },
  {
    "id": 192,
    "type": "multiple",
    "question": "以下关于IPV6 地址表示方法的描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. IPv6 地址通常分为4 组，每组为8 个十六进制数的形式，每组十六进制数间用冒号分隔",
      "B. 地址中包含的连续三个或多个均为0 的组，可以用双冒号\"::\"来代替",
      "C. 每组中的前导\"0\"都可以省略",
      "D. 在一个IPv6 地址中只能使用一次双冒号\"::\""
    ],
    "answer": [
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q192_expl.jpeg"
  },
  {
    "id": 193,
    "type": "multiple",
    "question": "以下关于包过滤防火墙的描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. 包过滤防火墙的本质是通过配置ACL 实施数据包的过滤",
      "B. 包过滤防火墙可以检查应用层数据",
      "C. 包过滤防火墙支持逐包检测",
      "D. 包过滤防火墙可以对关联报文进行分析，提高安全系数"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "技术文档显示，包过滤防火墙通过配置ACL 实施数据包的过滤。缺点是：逐包检 测，性能较低。通常不检查应用层数据。无报文关联分析，容易被欺骗。正确的是 AC",
    "explanationImage": "images/q193_expl.jpeg"
  },
  {
    "id": 194,
    "type": "multiple",
    "question": "在网络中，存在着大量针对CPU 的恶意报文以及需要正常上送CPU 的各类报文。为 了保证CPU 对正常业务进行响应，设备提供了本机防攻击功能。以下关于该功能的描 述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. 设备可以在防攻击策略中对上送CPU 的报文按照协议优先级进行调度，保证优先级高的协议先得到处理",
      "B. 为了保证基于会话的应用层数据在攻击发生时可以正常运行，可以配置动态链路保护功能",
      "C. 设备对不同类型的报文只可以设置相同的限制速率，从而减少上送CPU 的报文数量",
      "D. 所有CPU 防攻击功能对设备的管理网口也可以起作用"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "C 错，设备对不同类型的报文可以单独设置限制速率；D 错，所有CPU 防攻击功能 对设备的管理网口也不起作用",
    "explanationImage": "images/q194_expl.jpeg"
  },
  {
    "id": 195,
    "type": "multiple",
    "question": "某企业部署完IPSec 后发现业务不通，经管理员排查发现没有数据流触发IKE 协商， 那么以下哪些原因可能导致该情况发生?",
    "questionImage": null,
    "options": [
      "A. 域间安全策略配置错误",
      "B. IPSec 策略未正确应用到相关接口",
      "C. ACL 与保护数据流不匹配",
      "D. 路由不可达"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "官方数据截图，ABCD 都是可能导致该情况发生",
    "explanationImage": "images/q195_expl.jpeg"
  },
  {
    "id": 196,
    "type": "multiple",
    "question": "VRRP 协议包括两个版本VRRPV2 和VRRPV3，以下关于VRRPV3 版本的描述，正确 的是哪些项?",
    "questionImage": null,
    "options": [
      "A. VRRPV3 适用于IPv4 和IPv6 两种网络",
      "B. VRRPv3 支持认证功能",
      "C. 设备的缺省优先级为100",
      "D. 缺省情况下，VRRP 通告报文的发送时间间隔为1 秒"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q196_expl.jpeg"
  },
  {
    "id": 197,
    "type": "multiple",
    "question": "某大型商场为防止广播域过大，导致网络性能变差，配置了VLAN Pool。网络工程师 执行命令display vlan pool name STA 的回显如下。那么以下关于该配置信息的描述，正 确的是哪些 项?",
    "questionImage": "images/q197.jpeg",
    "options": [
      "A. VLAN Pool 采用的顺序分配算法",
      "B. VLAN Pool 的名称为STA",
      "C. VLAN Pool 的总数为2",
      "D. 加入到VLAN Pool 的VLAN ID 为2 和4"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q197_expl_1.jpeg"
  },
  {
    "id": 198,
    "type": "multiple",
    "question": "某园区网络中，采用OSPF 路由协议实现网络通信，其链路层协议为Ethernet。那么 缺省情况下，以下哪些报文会以单播的形式发送?",
    "questionImage": null,
    "options": [
      "A. LSAck 报文",
      "B. DD 报文",
      "C. LSR 报文",
      "D. Hello 报文"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": null,
    "explanationImage": "images/q198_expl.jpeg"
  },
  {
    "id": 199,
    "type": "multiple",
    "question": "在IS-IS 网络中，网络设备需要配置网络实体名称，它由三部分构成，且每个部分包 含的字段不同。其中，AreaAddress 部分包含以下哪些字段?",
    "questionImage": null,
    "options": [
      "A. IDI",
      "B. System ID",
      "C. Hig",
      "D. Order DSP",
      "E. AFI"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q199_expl.jpeg"
  },
  {
    "id": 200,
    "type": "multiple",
    "question": "IS-IS 和OSPF 路由协议虽然都是基于链路状态的IGP 协议，但两者还是存着一定的差 异。那么以下关于IS-IS 和OSPF 的对比，描述确是哪些项?",
    "questionImage": null,
    "options": [
      "A. IS-IS 的扩展性比OSPF 强，可同时支持IPv4 和IPv6 等网络层协议",
      "B. IS-IS 和OSPF 的工作层不同，IS-IS 工作在数据链路层，而OSPF 工作在网络层",
      "C. IS-IS 所支持的网络类型比OSPF 所支持的多",
      "D. 每个IS-IS 路由器都只属于一个区域，其中骨干区域是由Level-1-2 和Level-2 路由器构成"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "A 正确，IS-IS 可以直接支持IPv6，OSPFV3 才支持IPv6 其他几个选项如下PFV3 才 支持IPv6 其他几个选项如下",
    "explanationImage": "images/q200_expl_1.jpeg"
  },
  {
    "id": 201,
    "type": "multiple",
    "question": "在BGP 中通过Origin 属性来标识一条路由的起源，以下关于该属性的描述，正确的 是哪些项?",
    "questionImage": null,
    "options": [
      "A. 当去往同一个目的地存在多条不同Origin 属性的路由时，在其他条件都相同的情况下，BGP 将按如下顺序优选路由:IGP>EGP>Incomplete",
      "B. 该属性为公认必遵属性",
      "C. 如果路由是由始发的BGP 路由器使用network 命令注入到BGP 的，那么该BGP 路由在路由表中的标识符为i",
      "D. 如果路由是通过EGP 学习到的，那么该BGP 路由的Origin 属性在BGP 路由表的标识符为?"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": null,
    "explanationImage": "images/q201_expl.jpeg"
  },
  {
    "id": 202,
    "type": "multiple",
    "question": "当需要在AS 之间传递路由的时候，经常会通过BGP 和IGP 互相引入来实现。但是这 种实现方式存在风险，因此需要考虑以下哪些问题?",
    "questionImage": null,
    "options": [
      "A. 如果BGP 路由数量较大，那么AS 内部的低端设备可能不能装载如此大规模的路由，容易造成路由丢失",
      "B. 当所有BGP 路由重分布到IGP 中后，会破坏BGP 的路由防环机制，产生路由环路的隐患",
      "C. 如果某条路由不稳定，可能会导致整个AS 的路由震荡，影网络的稳定性",
      "D. 大量BGP 路由引入IGP，会影响IGP 的运行，如导致OSPF 的LSDB 过载"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q202_expl.jpeg"
  },
  {
    "id": 203,
    "type": "multiple",
    "question": "路由属性是对路由的特定描述，所有的BGP 路由属性都可以分为四类。其中，属于公 认任意的包括以下哪些属性?",
    "questionImage": null,
    "options": [
      "A. MED",
      "B. Atomi",
      "C. Aggregate",
      "D. Local Preference",
      "E. Comunity"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": "MED 是可选非过度，Comunity 是可选过度，Atomic Aggregate 和Local Preference 才是公认任意属性",
    "explanationImage": "images/q203_expl.jpeg"
  },
  {
    "id": 204,
    "type": "multiple",
    "question": "IP 前缀列表是常见的匹配工具之一，一条IP-Prefix 可创建多个index，每个index 可 以配置相应的动作和匹配条件。其中，index 中可使用的匹配条件有以下哪些项?",
    "questionImage": null,
    "options": [
      "A. 掩码长度",
      "B. 端口号",
      "C. IP 地址前缀",
      "D. 协议类型"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": null,
    "explanationImage": "images/q204_expl.jpeg"
  },
  {
    "id": 205,
    "type": "multiple",
    "question": "IP-Prefix 是路由策略中常用的匹配工具，某台华为路由器配置IP-Prefx 时，以下参数 中非必须配置有哪些项?",
    "questionImage": null,
    "options": [
      "A. 掩码长度",
      "B. 前缀列表的序号",
      "C. 掩码长度匹配范围的上限",
      "D. 掩码长度匹配范围的下限"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": "[中括号]里面的参数为可选配置，官方稳定可以看出除了掩码长度（masklen）必 配，其他都是选配",
    "explanationImage": "images/q205_expl.jpeg"
  },
  {
    "id": 206,
    "type": "multiple",
    "question": "某企业管理员日常运维时查看BGP 路由的详细信息如下，以下关于该路由的描述，正 确的是哪些 项?",
    "questionImage": "images/q206.jpeg",
    "options": [
      "A. 该路由原始的下一跳为172.16.1.2",
      "B. 本地BGP 设备的ID 号为10.1.1.1",
      "C. 本地自治系统号为100",
      "D. 该条路由被优选的原因是因为Localpref 优先级高"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": null,
    "explanationImage": "images/q206_expl.jpeg"
  },
  {
    "id": 207,
    "type": "multiple",
    "question": "如图所示为跨域组播网络。以下哪些协议会被应用到该网络架构中",
    "questionImage": "images/q207.jpeg",
    "options": [
      "A. PIM",
      "B. MBGP",
      "C. MSDP",
      "D. IGMP"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q207_expl.jpeg"
  },
  {
    "id": 208,
    "type": "multiple",
    "question": "使用基本ACL 进行路由匹配时，需配置规则编号、匹配动作及匹配项。其中，基本 ACL 可使用以下哪些匹配项?",
    "questionImage": null,
    "options": [
      "A. 分片信息",
      "B. 源/目MAC 地址",
      "C. 生效时间",
      "D. 源/目IP 地址"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": null,
    "explanationImage": "images/q208_expl.jpeg"
  },
  {
    "id": 209,
    "type": "multiple",
    "question": "以下关于BGP 基本概念的描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. BGP 的Router ID 是一个用于标识BGP 设备的32 位值，每个BGP 设备都必须有唯一的Router，否则对等体之间不能建立BGP 连接",
      "B. 运行于同一AS 内部的BGP 称为IBGP，为了快速传递路由，BGP 设备从IBGP 对等体学到的路由通告给其他IBGP 对等体",
      "C. 运行于不同AS 之间的BGP 称为EBGP，为了防止AS 间产生环路，当BGP 设备接收EBGP 对等体发送的路由时，会将带有本地AS 号的路由丢弃",
      "D. 发送BGP 报文的设备称为BGP 发言者，它接收或产生新的报文信息，并发布给其它BGP Speaker"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q209_expl.jpeg"
  },
  {
    "id": 210,
    "type": "multiple",
    "question": "作为IP 传输三种方式之一，IP 组播通信指的是IP 报文从一个源发出，被转发到一组 特定的接收者。以下关于IP 组播技术的描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. 相比单播，增加了信息源的负载",
      "B. 相比广播，可以防止信息泛滥",
      "C. 相比单播，能提高信息传输的安全性",
      "D. 相比广播，IP 组播可以有效地节约网络带宽"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q210_expl.jpeg"
  },
  {
    "id": 211,
    "type": "multiple",
    "question": "在OSPF 网络中，有多种网络类型，如:Broadcast、P2P、P2MP 和NBMA。缺省情况 下，Hello time 为30 秒的是以下哪些网络类型?",
    "questionImage": null,
    "options": [
      "A. Broadcast",
      "B. P2MP",
      "C. P2P",
      "D. NBMA"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": "参考官方资料，只有P2MP 和NBMA 是30 秒，P2P 和Broadcast 是10 秒",
    "explanationImage": null
  },
  {
    "id": 212,
    "type": "multiple",
    "question": "OSPF 邻接关系建立的过程中，涉及到DD 报文传输的阶段包括以下哪些项?",
    "questionImage": null,
    "options": [
      "A. Exchange",
      "B. Init",
      "C. Full",
      "D. Loading",
      "E. ExStart"
    ],
    "answer": [
      0,
      4
    ],
    "explanation": null,
    "explanationImage": "images/q212_expl.jpeg"
  },
  {
    "id": 213,
    "type": "multiple",
    "question": "以下关于Filter-Policy 的描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. Filter-Policy 只能应用在IGP 上，不能应用在BGP",
      "B. Filter-Policy 不能对特定的路由协议进行过滤",
      "C. Filter-Policy 具有\"入\"和\"出\"两个方向",
      "D. Filter-Policy 不仅可以调用前缀列表和ACL，还可以调用Route-Policy"
    ],
    "answer": [
      2,
      3
    ],
    "explanation": "Filter-Policy 可以应用在IGP 和BGP 上。能对特定的路由协议进行过滤。",
    "explanationImage": null
  },
  {
    "id": 214,
    "type": "multiple",
    "question": "基于会话的状态检测防火墙对于首包和后续包有不同的处理流程，那么以下关于该流 程的描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. 状态检测存在冻结时间，若长时间没有报文匹配的话会冻结该会话，在此之后如果依然有报文匹配，则不需要重新建立会话。这样既节约系统资源，又能够起到快速响应的作用",
      "B. 在状态检查机制打开的情况下，后续包不需要进行安全策略检查，直接允许通过",
      "C. 报文到达防火墙时，会查找会话表，如果没有匹配，防火墙会对报文直接丢弃",
      "D. 在状态检查机制打开的情况下，防火墙处理TCP 报文时，只有SYN 报文才能建立会话",
      "E. 报文到达防火墙时，会查找会话表，如果匹配，防火墙会进行后续包处理流程"
    ],
    "answer": [
      1,
      3,
      4
    ],
    "explanation": "状态检测是包过滤技术的发展，它考虑报文前后的关联性，检测的是连接状态而非 单个报文。状态检测防火墙就是支持状态检测功能的防火墙。防火墙状态检测开启情况 下，流量的首包会创建会话表项，后续包即可直接匹配会话表项防火墙为各种协议设定了 会话老化机制。当一条会话在老化时间内没有被任何报文匹配，则会被从会话表中删除。 这种机制可以避免防火墙的设备资源被大量无用、陈旧的会话表项消耗。",
    "explanationImage": "images/q214_expl.jpeg"
  },
  {
    "id": 215,
    "type": "multiple",
    "question": "IGMPv2 版本支持以下哪些报文?",
    "questionImage": null,
    "options": [
      "A. 特定组查询报文",
      "B. 指定源查询报文",
      "C. 普遍组查询报文",
      "D. 成员离开报文"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q215_expl.jpeg"
  },
  {
    "id": 216,
    "type": "multiple",
    "question": "以下关于OSPF 命令的描述，错误的是哪些项?",
    "questionImage": null,
    "options": [
      "A. OSPFv3 配置中不必使用router-id 命令配置Router ID，配置方法和OSPFv2-样",
      "B. Stub 区域和Totally Stub 区域的配置区别是Totally Stub 区配置了no-summary",
      "C. OSPFv2 和OSPFv3 配置接口命令的区别是OSPFv2 使用network 命令，而OSPFv3 直接在接口上使能",
      "D. stub 命令用来配置此路由器为Stub 路由器，Stub 路由器可以与非Stub 路由器形成邻居关系"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q216_expl.jpeg"
  },
  {
    "id": 217,
    "type": "multiple",
    "question": "构建数通网络的华为引擎包括以下哪些项?",
    "questionImage": null,
    "options": [
      "A. AirEngine",
      "B. HiSecEngine",
      "C. NetEngine",
      "D. CloudEngine"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q217_expl.jpeg"
  },
  {
    "id": 218,
    "type": "multiple",
    "question": "以下哪些项属于BGP 可选过渡属性?",
    "questionImage": null,
    "options": [
      "A. Aggregator",
      "B. Community",
      "C. Local_Preference",
      "D. Multi_Exit_Dise"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": null,
    "explanationImage": "images/q218_expl.jpeg"
  },
  {
    "id": 219,
    "type": "multiple",
    "question": "PIM-SM 中的Hello 消息有以下哪些作用?",
    "questionImage": null,
    "options": [
      "A. 向RP 注册",
      "B. 邻居间参数协商",
      "C. 选举网段BDR",
      "D. 建立并维护邻居关系"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q219_expl.jpeg"
  },
  {
    "id": 220,
    "type": "multiple",
    "question": "华为防火墙执行安全策略的首要条件是先匹配流量，再执行相应动作。那么以下哪些 参数可以作为安全策略的匹配条件?",
    "questionImage": null,
    "options": [
      "A. VLAN ID",
      "B. 时间",
      "C. MAC",
      "D. 服务"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q220_expl.jpeg"
  },
  {
    "id": 221,
    "type": "multiple",
    "question": "如图所示为某RSTP 网络，现用户在根桥SW1 和SW2 之间新增了一条链路，那么当 SW2 收到根桥SW1 发送的ProposaL 位置位的RST BPDU 之后，会将自己的所有端口进 入同步状态，那么以下关于各角色接口同步状态的描述，正确的是哪些 项?",
    "questionImage": "images/q221.jpeg",
    "options": [
      "A. 指定端口会进入Discarding 状态",
      "B. 根端口会进入Discarding 状态",
      "C. Alternate 端囗会进入Discarding 状态",
      "D. 边缘端口会进入Discarding 状态"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "根端口会进入Forwarding 状态，边缘端口不改变状态",
    "explanationImage": "images/q221_expl.jpeg"
  },
  {
    "id": 222,
    "type": "multiple",
    "question": "IGMP SSM Mapping 通过静态的将组播源与组播组进行绑定，使得IGMPv1 与IGMPv2 的组成员也能接入SSM 组播网络。下列关于IGMP SSM Mapping 的描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. 如果未使能IGMP SSM Mapping 功能，IGMPv1 和IGMPv2 均不支持部署SSM 模式的组播",
      "B. IGMP SSM Mapping 不处理IGMPv3 的报告报文。为了保证同一网段运行任意版本IGMP的主机都能得到SSM 服务，需要在与成员主机所在网段相连的组播路由器接口上运行IGMPv3",
      "C. SSM 的组播组的地址是232.0.0.0~232.255.255.255",
      "D. SSM Mapping 通过在组播交换机上静态配置SSM 地址的映射规则，可以将IGMPv1 和IGMPv2 的报告报文中的(∗，G)信息转化为对应的(S，G)信息"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "培训文档均有详细介绍，ABCD 都是对的",
    "explanationImage": "images/q222_expl.jpeg"
  },
  {
    "id": 223,
    "type": "multiple",
    "question": "PIM-DM 有很多工作机制，以下哪些机制用于构建SPT?",
    "questionImage": null,
    "options": [
      "A. 剪枝",
      "B. 扩散",
      "C. 邻居发现",
      "D. 嫁接"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q223_expl.jpeg"
  },
  {
    "id": 224,
    "type": "multiple",
    "question": "黑客经常通过各种攻击来获取系统管理员用户的登录权，为了增加管理员的账号安 全，可以采取以下哪些措施进行安全加固?",
    "questionImage": null,
    "options": [
      "A. 定期检查系统中是否存在无用的管理员帐户，如果存在，建议删除无用帐户，减小攻击面",
      "B. 为了安全性和方便记忆，可以将密码设置长期有效",
      "C. 建议账号专用，管理员应按照不同的维护角色，分配不同的账号，避免不同人员间共享账号",
      "D. 密码传递时注意加密，尽量通过邮件传递密码"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "B 错误，为了安全性，密码需要定期更换。D 错误，就算密码经过加密，也不建议 用邮件传递。",
    "explanationImage": null
  },
  {
    "id": 225,
    "type": "multiple",
    "question": "GRE 是一种可以解决异种网络报文传输问题的VPN 技术，以下关于该技术的描述， 正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. GRE 隧道可以和IPSec 结合使用，从而保证语音、视频等组播业务的安全",
      "B. GRE 是一种二层VPN 封装技术",
      "C. GRE 可以使被封装的数据报文能够在另一个网络层协议中传输，但是无法封装组播数据",
      "D. GRE 隧道可以扩展跳数受限网络协议的工作范围"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q225_expl.jpeg"
  },
  {
    "id": 226,
    "type": "multiple",
    "question": "BFD 作为一个快速故障检测机制，可以和多种协议进行联动。那么以下哪些协议支持 和BFD 进行联动?",
    "questionImage": null,
    "options": [
      "A. 静态路由",
      "B. BGP",
      "C. OSPF",
      "D. PIM"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "FD 的应用场景由很多，BFD 与静态路由、OSPF、BGP、PIM，四种协议都可以联动",
    "explanationImage": null
  },
  {
    "id": 227,
    "type": "multiple",
    "question": "BFD 的单臂回声功能是指通过BFD 报文的环回操作检测链路的连通性，那么以下关 干该功能的描述正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. 单臂回声功能只适用于单跳BFD 会话中",
      "B. 在对端使能了URPF 特性的情况下，可能会导致BFD 报文在对端被错误地丢弃",
      "C. 在配置单臂回声功能时，设备缺省使用出接口IP 为源IP",
      "D. 在配置单臂回声功能的BFD 会话时，不仅需要配置本地标识符，也需要配置远端标识符"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": null,
    "explanationImage": "images/q227_expl.jpeg"
  },
  {
    "id": 228,
    "type": "multiple",
    "question": "数据加密可以有效保证VPN 数据的安全性，但并不是所有的VPN 都能够支持该特 性。那么以下哪些VPN 技术支持数据加密和验证?",
    "questionImage": null,
    "options": [
      "A. IPSec",
      "B. SSL",
      "C. MPLS VPN",
      "D. L2TP"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": null,
    "explanationImage": "images/q228_expl.jpeg"
  },
  {
    "id": 229,
    "type": "multiple",
    "question": "某企业管理员部署完DHCP 服务器后，员工反应客户端无法从DHCP 服务器获取IP 地址。那么以下哪些原因可能会造成此类情况发生?",
    "questionImage": null,
    "options": [
      "A. DHCP 客户端和DHCP 服务器不在同一个网段，网络中未配置DHCP 中继",
      "B. DHCP 服务器使能了STP 功能",
      "C. 配置了多个DHCP 服务器",
      "D. 缺省情况下，系统未开启DHCP 功能，管理员忘记启用"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q229_expl.jpeg"
  },
  {
    "id": 230,
    "type": "multiple",
    "question": "链路聚合是网络中常用的技术之一，其优点主要包括以下哪些项?",
    "questionImage": null,
    "options": [
      "A. 增加链路带宽",
      "B. 路由备份",
      "C. 负载分担",
      "D. 提高可靠性"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q230_expl.jpeg"
  },
  {
    "id": 231,
    "type": "multiple",
    "question": "MSTP 在RSTP 的基础上，新增了以下哪些端口角色?",
    "questionImage": null,
    "options": [
      "A. Master 端口",
      "B. Backup 端口",
      "C. 边缘端口",
      "D. 域边缘端囗"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q231_expl.jpeg"
  },
  {
    "id": 232,
    "type": "multiple",
    "question": "组播适用于任何\"点到多点\"的数据发布，那么以下哪些应用数据，可以采用组播方式 转发?",
    "questionImage": null,
    "options": [
      "A. 实时音频会议",
      "B. 数据仓库",
      "C. 网络电视",
      "D. 在线直播"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q232_expl.jpeg"
  },
  {
    "id": 233,
    "type": "multiple",
    "question": "某企业管理员在日常运维时，查看路由器接口的IGMP 配置如下。那么以下关于该信 息的描述，正确的是哪些 项?",
    "questionImage": "images/q233.jpeg",
    "options": [
      "A. 接口IP 地址是192.168.1.1",
      "B. IGMP 协议版本为2",
      "C. 查询报文最大响应时间是10 秒",
      "D. 特定组查询报文间隔是60 秒"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": null,
    "explanationImage": "images/q233_expl.jpeg"
  },
  {
    "id": 234,
    "type": "multiple",
    "question": "会话表是用来记录协议连接状态的表项，是防火墙转发报文的重要依据。以下哪些协 议报文会使防火墙创建会话?",
    "questionImage": null,
    "options": [
      "A. TCP",
      "B. ICMP 差错报文",
      "C. GRE",
      "D. 分片后续片报文"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": null,
    "explanationImage": "images/q234_expl.jpeg"
  },
  {
    "id": 235,
    "type": "multiple",
    "question": "某企业Portal 认证场景中，AC 作为接入设备与Poral 服务器之间使用Portal 协议通 信，那么以下关于Portal 协议的描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. 缺省情况下，接入设备上处理Portal 协议报文的端口号为2000",
      "B. HITP/HTTPS 协议可作为Portal 接入协议，也可以作为Portal 认证协议",
      "C. 缺省情况下，设备向Portal 服务器主动发送报文时使用的目的端口号为50100",
      "D. Portal 协议是基于TCP 协议进行数据传输的"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "A 对，缺省情况下,设备侦听Portal 协议报文的端口号为2000。B 对，HTTP/HTTPS 协议可以作为Portal 接入协议，也可以作为Portal 认证协议。C 对，缺省情况下，设备 向Portal 服务器主动发送报文时使用的目的端口号为50100。D 错，基于UDP 不是 TCP",
    "explanationImage": "images/q235_expl.jpeg"
  },
  {
    "id": 236,
    "type": "multiple",
    "question": "某大型企业为确保WLAN 网络的可靠性，AC 采用了VRRP 热备份组网.那么以下关于 VRRP 配置的描述，错误的是哪些项?",
    "questionImage": null,
    "options": [
      "A. 主、备AC 中同一VRRP 备份组的虚拟IP 地址必须配置一致",
      "B. 缺省情况下，设备在VRRP 备份组中的优先级为100，数值越小优先级越高",
      "C. 主、备AC 中同一VRRP 备份组的vrid 必须配置一致",
      "D. VRRP 协议心跳报文的缺省发送间限为1 秒"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": "以下官方文档原话，D 描述错误。 https://support.huawei.com/enterprise/zh/doc/EDOC1100064394?section=j0ot",
    "explanationImage": "images/q236_expl_1.jpeg"
  },
  {
    "id": 237,
    "type": "multiple",
    "question": "在OSPF 网络中，OSPF 邻居表是OSPF 所维护的重要表项之一，那么以下关于该表项 的描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. OSPF 邻居表可通过命令display osp",
      "B. peer 查看",
      "C. OSPF 传递LSA 之前，需先建立OSPF 邻居关系",
      "D. OSPF 邻居关系是通过交互Hello 报文建立的",
      "E. OSPF 邻居表中保存了OSPF 路由器之间的链路状态信息"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "D 错误，OSPF 邻居表中保存了OSPF 路由器之间的邻居关系相关信息，不是链路状 态信息",
    "explanationImage": "images/q237_expl.jpeg"
  },
  {
    "id": 238,
    "type": "multiple",
    "question": "RPF 检查是组播中一个极为重要的机制，可以确保转发路径的正确性和唯一性。正常 情况下，RPF 检查会从以下哪些路由表项中选出最优路由?",
    "questionImage": null,
    "options": [
      "A. 组播静态路由表",
      "B. 组播动态路由表",
      "C. MBGP 路由表",
      "D. 单播路由表"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q238_expl.jpeg"
  },
  {
    "id": 239,
    "type": "multiple",
    "question": "以下关于AC 漫游组的描述，错误的是哪些项?",
    "questionImage": null,
    "options": [
      "A. AC 可担任多个漫游组的漫游组服务器，同时自身可加入多个漫游组",
      "B. STA 只能在同一个漫游组内的AC 间才能进行漫游",
      "C. 漫游组服务器必须为漫游组内的AC",
      "D. 漫游组的AC 之间通过采用DTLS 扩展隧道来封装和传输漫游相关信息"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "A 错，自身只能加入一个漫游组；C 错，漫游组服务器可以是漫游组外AC，B 对， 有官方原文描述，D 对，漫游组的AC 之间通过采用DTLS 扩展隧道来封装和传输漫游相 关信息保证安全性",
    "explanationImage": "images/q239_expl_1.jpeg"
  },
  {
    "id": 240,
    "type": "multiple",
    "question": "BGP 设备与对等体建立邻居关系后，会通告路由给邻居。以下关于BGP 通告路由的 描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. 当存在多条到达同一目的地址的有效路由时，BGP 设备只将最优路由发布给对等体",
      "B. 路由更新时，BGP 设备发送全量BGP 路由",
      "C. 从EBGP 对等体获取的路由，会发布给所有对等体",
      "D. 从IBGP 对等体获取的路由，不会发送给IBGP 对等体"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q240_expl.jpeg"
  },
  {
    "id": 241,
    "type": "multiple",
    "question": "OSPF 的报文类型包括以下哪些项?",
    "questionImage": null,
    "options": [
      "A. Hello",
      "B. Link Stat DD",
      "C. Keeplive",
      "D. Init",
      "E. Databas Description",
      "F. Link Stat Request"
    ],
    "answer": [
      0,
      4,
      5
    ],
    "explanation": null,
    "explanationImage": "images/q241_expl.jpeg"
  },
  {
    "id": 242,
    "type": "multiple",
    "question": "以下哪些方法能够相对降低OSPF 路由计算负荷?",
    "questionImage": null,
    "options": [
      "A. 对普通区域路由手动汇总",
      "B. 使用等价负载均衡",
      "C. 部署Stub 区域",
      "D. 使用静默端口(Silent-Interfac",
      "E. 划分OSPF 非骨干区域"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": null,
    "explanationImage": "images/q242_expl.jpeg"
  },
  {
    "id": 243,
    "type": "multiple",
    "question": "在OSPF 网络中，为减少某些区域的LSA 数量，定义了多种特殊区域，如STUB、 NSSA 等。那么以下关于STUB 区域的描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. 虚连接不能穿越STUB 区域",
      "B. 骨干区域可以被设置为STUB 区域",
      "C. STUB 区域中的所有路由器都必须配置STUB 区域属性",
      "D. STUB 区域内可以接收AS 外部路由"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": null,
    "explanationImage": "images/q243_expl.jpeg"
  },
  {
    "id": 244,
    "type": "multiple",
    "question": "在OSPF 网络中，区域间路由的防环机制要求所有非骨干区域必须与骨干区域直接相 连，若某个非骨干区域没有与骨干区域相连，则可通过配置虚连接解决。那么以下关于虚 连接的描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. 虚连接配置视图为OSPF 进程视图",
      "B. 虚连接可以用于骨干区域被分割的场景",
      "C. 虚连接遵循OSPF 区域间的防环规则（请参考解析截图）",
      "D. 虚连接可以用于优化OSPF 路径"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "虚连接是用来连接不连续的骨干区域或者非骨干区域没有与骨干区域相连的场景， 如下官方文档介绍，虚连接配置视图为OSPF 进程视图，因此AB 描述正确，D 错误，虚 连接违背了OSPF 区域间的防环规则，C 也错的",
    "explanationImage": "images/q244_expl.jpeg"
  },
  {
    "id": 245,
    "type": "multiple",
    "question": "在OSPF 网络中，OSPF 路由器会发送Hello 报文建立邻居关系，但不同网络类型发送 Hello 报文的方式不同。那么以下哪些网络类型会以组播方式发送Hello 报文?",
    "questionImage": null,
    "options": [
      "A. Broadcast",
      "B. P2P",
      "C. NBMA",
      "D. P2MP"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "以下技术文档显示除了NBMA，其他都是对的",
    "explanationImage": "images/q245_expl.jpeg"
  },
  {
    "id": 246,
    "type": "multiple",
    "question": "BGP 协议是一种实现自治系统AS 之间的路由可达，并选择优选路由的距离矢量路由 协议。那么以下关于该协议的描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. BGP 使用TCP 作为其传输层协议",
      "B. BGP 不支持认证，无法保障网络的安全性",
      "C. BGP 提供了丰富的路由策略",
      "D. BGP 支持自动发现邻居"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": null,
    "explanationImage": "images/q246_expl.jpeg"
  },
  {
    "id": 247,
    "type": "multiple",
    "question": "某企业办公网络中，两台直连路由器开启了OSPF 路由协议，建立邻接关系时发现状 态机一直停留在2-way 状态。那么造成该现象的原因，不可能是以下哪些项?",
    "questionImage": null,
    "options": [
      "A. Router-ID 冲突",
      "B. Hello time 不一致",
      "C. Are",
      "D. ID 不一致",
      "E. Hello 报文的N-bit 和E-bit 一致"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q247_expl.jpeg"
  },
  {
    "id": 248,
    "type": "multiple",
    "question": "在BGP 网络中，建立EBGP 邻居关系时，要使非直连的EBGP 邻居正常建立，则必须 包含以下哪些配置?",
    "questionImage": null,
    "options": [
      "A. peer connectinterface",
      "B. peer as-number",
      "C. peer ebgp-max-hop",
      "D. peer ignore"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "建议在两台设备通过多链路建立多个对等体时，使用peer connect-interface 命令。 配置本命令前，需要先使用peer as-number 命令建立相应的对等体关系。如果是EBGP 连接，还要配置peer ebgp-max-hop 命令，允许EBGP 通过非直连方式建立邻居关系。",
    "explanationImage": null
  },
  {
    "id": 249,
    "type": "multiple",
    "question": "如图所示为某OSPF 网络，已知R1 和R2 已,成功建立邻接关系，现一工程师在R2 上 配置了图中命令。那么在R2 上查看LSDB 时，可能存在以下哪些 LSA?",
    "questionImage": "images/q249.jpeg",
    "options": [
      "A. LS",
      "B. 3",
      "C. LS",
      "D. 4",
      "E. LS",
      "F. 2",
      "G. LS",
      "H. 1"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "过滤策略过滤的是路由表的条目信息，并不是过滤LSA，LSA 只是用于计算路由的 元素，并不会受到改策略影响",
    "explanationImage": null
  },
  {
    "id": 250,
    "type": "multiple",
    "question": "某大型企业为确保WLAN 网络安全，对访客采用外置Portal 认证，且使用AC 作为接 入设备。但认证过程中访客一直无法认证成功，那么导致该问题的原因可能是以下哪些?",
    "questionImage": null,
    "options": [
      "A. AC 配置的共享密钥和Portal 服务器不一致",
      "B. AC 上配置的向Portal 服务器发送报文的目的端口与Portal 服务器上的认证端口不一致",
      "C. AC 关闭了STA 地址学习功能",
      "D. AC 开启了Portal 服务器探测功能，而Portal 服务器上未开启该功能"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "外置Portal 必须要配置共享密钥以及认证端口，所以AB 正确；AC 开启了Portal 服 务器探测功能，而Portal 服务器上未开启该功能，会导致AC 无法检测到Portal 服务器的 状态，从而无法正常推送认证页面。D 正确关闭了STA 地址学习功能也会导致Portal 认 证失败，C 也正确；",
    "explanationImage": "images/q250_expl.jpeg"
  },
  {
    "id": 251,
    "type": "multiple",
    "question": "如图所示为某园区网铬，全网路由器均配置了IS-IS 路由器协议，且运行正常。那么 缺省情况下，以下哪些路由器的路由表中拥有全网明细路由？",
    "questionImage": "images/q251.jpeg",
    "options": [
      "A. R3",
      "B. R1",
      "C. R7",
      "D. R2"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q251_expl.jpeg"
  },
  {
    "id": 252,
    "type": "multiple",
    "question": "某企业办公网络采用OSPF 路由协议实现网络通信，现工程师在一台路由器查看OSPF 接口CE0/0/1 的详细信息如下所示。那么以下关于该接口的描述，正确的是哪些 项?",
    "questionImage": "images/q252.jpeg",
    "options": [
      "A. 该接口不能接收或发送OSPF 报文",
      "B. 该接口所属网段不能发布出去",
      "C. 该接口的网络类型为Broadcast",
      "D. 该接口为DR"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": null,
    "explanationImage": "images/q252_expl.jpeg"
  },
  {
    "id": 253,
    "type": "multiple",
    "question": "在广播型网络中，IS-IS 协议会选举出一个DIS，而OSPF 协议会选举出一个DR。那么 以下关于DIS 和DR 区别的描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. DIS 和DR 选举规则不同，DIS 先比较优先级，然后比较IP 地址，而DR 则是先比较IP地址，再比较优先级",
      "B. DIS 和DR 形成邻接关系的条件不同，IS-IS 中的非DIS 路由器之间也会建立邻接关系",
      "C. DIS 和DR 负责的功能不同，DIS 主要用于创建和更新伪节点",
      "D. DIS 和DR 选举时间不同，DIS 在建立完邻接关系之后选举"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q253_expl.jpeg"
  },
  {
    "id": 254,
    "type": "multiple",
    "question": "在IS-IS 网络中，每台路由器都可以产生LSP，那么当遇到以下哪些事件时，会触发生 成一个新的LSP?",
    "questionImage": null,
    "options": [
      "A. 区域间的IP 路由发生变化",
      "B. 周期性更新",
      "C. IS-IS 相关接口Up 或Down",
      "D. 调大IS-IS 接口开销值"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q254_expl.jpeg"
  },
  {
    "id": 255,
    "type": "multiple",
    "question": "某BGP 组网中如果部署了路由反射器RR，那么它需要遵循以下哪些反射规则?",
    "questionImage": null,
    "options": [
      "A. 从客户机学到的路由，只发布给所有非客户机",
      "B. 从非客户机学到的路由，只发布给所有客户机",
      "C. 当路由反射器执行路由反射时，它只将自己使用的、最优的BGP 路由进行反射",
      "D. 从EBGP 对等体学到的路由，发布给所有的非客户机和客户机"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q255_expl_1.jpeg"
  },
  {
    "id": 256,
    "type": "multiple",
    "question": "BGP 中AS_Path 属性可以作为BGP 选路的条件，因此在某些情况下需要使用Route- Policy 修改该属性来影响选路。那么在使用Route-Policy 中apply as-path 语句修改该属性 时可携带以下哪些参数?",
    "questionImage": null,
    "options": [
      "A. Delete",
      "B. Additive",
      "C. Overwrite",
      "D. Copy"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": null,
    "explanationImage": "images/q256_expl.jpeg"
  },
  {
    "id": 257,
    "type": "multiple",
    "question": "一台路由器收到报文后，会按照ACL 匹配流程进行匹配，匹配结果只有两种:\"匹配”或 \"不匹配”。若匹配结果为\"不匹配”，那么可能是以下哪些原因?",
    "questionImage": null,
    "options": [
      "A. 遍历所有规则都未找到符合匹配条件的规则",
      "B. 配置的ACL 中没有规则",
      "C. 匹配了ACL，但其匹配动作为\"deny\"",
      "D. 设备未配置ACL"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q257_expl.jpeg"
  },
  {
    "id": 258,
    "type": "multiple",
    "question": "安全策略是防火墙的核心特性，只有符合安全策略的合法流量才能通过防火墙进行转 发。以下关于安全策略匹配规则的描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. 每条安全策略中包含多个匹配条件，各个匹配条件之间是\"与\"的关系",
      "B. 当配置多条安全策略规则时，安全策略列表默认是按照配置顺序排列的，越先配置的安全策略规则位置越靠前，优先级越高",
      "C. 一个匹配条件中可以配置多个值，多个值之间是\"与\"的关系",
      "D. 系统默认存在一条缺省安全策略default，所有匹配条件均为any，动作默认为允许"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": null,
    "explanationImage": "images/q258_expl.jpeg"
  },
  {
    "id": 259,
    "type": "multiple",
    "question": "如图所示为某OSPF 网络，已知R1、R2 和R3 已运行OSPF，R1 将四个私网路由宣 告进了OSPF 中。现要求使用filter-policy 工具达到只有R2 路由表中不存在目的网段为 192.168.3.0/24 的路由条目，但R1 和R3 路由表中存在目的网段为192.168.3.0/24 的路 由条目。那么以下调用filter-policy 的操作中，无法实现上述需求的是哪些 项?",
    "questionImage": "images/q259.jpeg",
    "options": [
      "A. 在R1 上使用Filter-Policy 对引入的路由在引入时进行过滤",
      "B. 在R2 上对接收的路由使用Filter-Policy 进行过滤",
      "C. 在R2 上对发布的路由使用Filter-Policy 进行过滤",
      "D. 在R1 上使用Filter-Policy 对引入的路由在发布时进行过滤"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "filter-policy 只能过滤路由信息，无法过滤LSA，不能修改路由属性值。只有在R2 上对接收的路由使用Filter-Policy 进行过滤，才能控制R2 的路由表里没有 192.168.3.0/24，而在R1 和R3 路由表里都有。",
    "explanationImage": null
  },
  {
    "id": 260,
    "type": "multiple",
    "question": "BFD 状态机的建立和拆除都采用三次握手机制，以确保两端系统都能知道状态的变 化。以BFD 会话建立为例，设备会经历以下哪些会话状态?",
    "questionImage": null,
    "options": [
      "A. AdminDown",
      "B. Up",
      "C. Init",
      "D. Down"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": "AdminDown 是管理性关闭，不是BFD 会话建立过程的会话状态",
    "explanationImage": "images/q260_expl.jpeg"
  },
  {
    "id": 261,
    "type": "multiple",
    "question": "某企业们WLAN 网络，为保证业务的可靠性，部署VRRP 双机热备。用户配置完成 后，发现主备通道无法建立，导致双机热备份功能异常。那么造成上述故障的原因，可能 是以下哪些?",
    "questionImage": null,
    "options": [
      "A. 主备通道参数配置不匹配",
      "B. 本端的源IP 地址、源端口号和对端的目的IP 地址、目的端口号不一致",
      "C. 主备AC 型号不一致",
      "D. 主备服务报文的重传次数和重传间隔不一致"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q261_expl.jpeg"
  },
  {
    "id": 262,
    "type": "multiple",
    "question": "某企业网络中，运行OSPF 路由协议实现网络通信，已知某路由器角色仅为ABR，那 么该设备可能产生以下哪些类型的",
    "questionImage": null,
    "options": [
      "A. AS External LSA",
      "B. ASBR Summary LSA",
      "C. Network Summary LSA",
      "D. NSS",
      "E. LSA"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": "路由器角色仅为ABR，只能产生1、2、3、4 类的LSA，AD 是ASBR 设备产生的",
    "explanationImage": "images/q262_expl.jpeg"
  },
  {
    "id": 263,
    "type": "multiple",
    "question": "某园区采用OSPF 路由协议实现网络通信，现工程师在一台路由器上执行display ospf peer 命令的回显如下。那么以下关于该设备的描述，正确的是哪些 项?",
    "questionImage": "images/q263.jpeg",
    "options": [
      "A. R2 两个OSPF 邻居的Router-ID 分别为10.0.5.5 和10.0.4.4",
      "B. R2 与邻居10.0.5.5 所处网络的DR 是10.0.235.5",
      "C. R2 与10.0.5.5 和10.0.4.4 都已成功建立邻接关系",
      "D. R2 与邻居10.0.4.4 所处网络的DR/BDR 选举失败"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "通过如下回显截图信息，R2 两个OSPF 邻居的Router-ID 分别为10.0.5.5 和 10.0.4.4，R2 与邻居10.0.5.5 所处网络的DR 是10.0.235.5，R2 与10.0.5.5 和10.0.4.4 的 邻居状态都已经是Full 状态，代表已成功建立邻接关系。R2 与邻居10.0.4.4 通过S1/0/1 接口互联的，该接口的网络类型是P2P，不需要选举DR/BDR，因此D 错误。",
    "explanationImage": "images/q263_expl.jpeg"
  },
  {
    "id": 264,
    "type": "multiple",
    "question": "某大型企业WLAN 网络，为确保组网可靠性，AC 采用VRRP 双机热备份的组网方 式。那么基于VRRP 双机热备份进行数据备份时，可采用以下哪些备份方式?",
    "questionImage": null,
    "options": [
      "A. 云备份",
      "B. 定时同步",
      "C. 实时备份",
      "D. 批量备份"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q264_expl.jpeg"
  },
  {
    "id": 265,
    "type": "multiple",
    "question": "在RSTP 网络中，新增了多种保护功能，如:根保护、环路保护、防TC-BPDU 攻击 等。那么以下关于RSTP 新增保护功能的描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. 某开启了根保护功能的指定接口收到优先级更高的RST BPDU 时，一段时间内将无法转发报文",
      "B. 在开启环路保护功能后，若根端口长时间收不到上游设备的BPDU 报文，则会将端口角色切换为指定端口",
      "C. 若设备开启BPDU 保护功能后，会影响边缘端口的属性",
      "D. 启用防TC-BPDU 攻击功能后，对于其他超出阈值的TC BPDU 报文，定时器到期后设备只对其统一处理一次"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q265_expl.jpeg"
  },
  {
    "id": 266,
    "type": "multiple",
    "question": "IGMP 组表项在组播转发中起到了重要的作用，某管理员通过命令查看一个组播表项 信息如下。以下关于该表项的描述，正确的是哪些 项?",
    "questionImage": "images/q266.jpeg",
    "options": [
      "A. 该表项可用于构建相应(S，G）表项",
      "C. Expires 代表了该组的老化时间",
      "D. 该表项是由用户主机发送的IGMP 加入报文触发创建的",
      "E. 225.1.1.2 是用户加入的组地址"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q266_expl.jpeg"
  },
  {
    "id": 267,
    "type": "multiple",
    "question": "IPv6 在设计的时候考虑到IPv4 的弊端，进行了改良和更新。相较于IPv4 协议，IPv6 协议具有以下哪些优势?",
    "questionImage": null,
    "options": [
      "A. IPv6 协议内置支持通过地址自动配置方式使主机自动发现网络并获取IPv6 地址",
      "B. 可实现Qos",
      "C. 支持IPSec 的认证和加密",
      "D. 支持源MAC 过滤"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "IPV4 和IPV6 都可以实现QoS，所以实现QoS 不是IPV6 相较于IPV4 的优势，所以 B 选项错误；同时IPv6 是网络层协议，不能支持层MAC 地址过滤，D 选项错误。",
    "explanationImage": null
  },
  {
    "id": 268,
    "type": "multiple",
    "question": "某路由器在流策略中应用ACL,其ACL 配置信息如下所示。那么以下主机地址中，报 文可以通过的是哪些 项?",
    "questionImage": "images/q268.jpeg",
    "options": [
      "A. 192.168.2.1",
      "B. 192.168.1.1",
      "C. 192.168.1.3",
      "D. 192.168.1.2"
    ],
    "answer": [
      2,
      3
    ],
    "explanation": "rule 5，通配符是0 代表完全匹配，因此只允许192.168.1.2 这个主机通过。rule 10 也是只允许192.168.1.3 这个主机通过。rule 15 是拒绝192.168.1.0/24 的网段通过。因此 只有CD 可通过，AC 无法通过",
    "explanationImage": null
  },
  {
    "id": 269,
    "type": "multiple",
    "question": "AS_Path 属性是BGP 中重要的属性，可以作为路由优选的衡量标准之一。以下关于该 属性的描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. 该属性属于公认任意属性，所有BGP 路由器都必须能够识别的属性",
      "B. BGP 计算AS_Path 长度时不考虑AS_Confed_Sequence 和AS_Confed_Set",
      "C. 该属性可用于BGP 路由防环",
      "D. 路由被通告给IBGP 对等体时，AS_Path 不会发生改变"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": "AS_PATH 的长度是由AS_SEQUENCE 这种segment 的AS 号数量来决定的,而 AS_CONFED_SEQUENCE、AS_CONFED_SET 和AS_SET 的长度都不计入AS 长度计算。",
    "explanationImage": "images/q269_expl.jpeg"
  },
  {
    "id": 270,
    "type": "multiple",
    "question": "一个Route-Policy 由多个if-match 和apply 子句组成，若通过节点匹配的路由将执行 所有apply 子句。其中，配置apply 子句时，可以修改以下哪些路由信息?",
    "questionImage": null,
    "options": [
      "A. 修改路由的开销值",
      "B. 设置BGP 路由的AS_Path 属性",
      "C. 修改OSPF 的开销类型",
      "D. 设置IS-IS 的路由级别"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q270_expl.jpeg"
  },
  {
    "id": 271,
    "type": "multiple",
    "question": "某公司有一个由三台交换机组成并稳定运行的堆叠系统，现主交换机因故障重启。那 么以下关于该现象的描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. 原主交换机重启完成之前，原备交换机会升为新主交换机",
      "B. 原主交换机重启完成之后，原备交换机会降为新从交换机",
      "C. 原主交换机重启完成之后，原主交换机会成为新主交换机",
      "D. 原主交换机重启完成之前，原从交换机会被指定为新备交换机"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": "当主交换机退出，备份交换机升级为主交换机，重新计算堆拓扑并同步到其他成员 交换机，指定新的备交换机，之后进入稳定运行状态，主交换机重启后，作为新加入的交 换机会选举为从交换机，堆系统中原有主备从角色不变，综上选AD。",
    "explanationImage": null
  },
  {
    "id": 272,
    "type": "multiple",
    "question": "iMaster NcE-Fabric 是华为面向数据中心网络场景推出的网络控制器，它可以实现以 下哪些业务的自动化，从而提升客户业务开展效率?",
    "questionImage": null,
    "options": [
      "A. 规划",
      "B. 建设",
      "C. 调优",
      "D. 维护"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "在数据中心网络场景中，规划能合理布局，建设搭建基础，调优提升性能，维护保 障稳定，这些业务自动化都可提升效率。而这几个方面涵盖了网络控制器的主要作用。",
    "explanationImage": null
  },
  {
    "id": 273,
    "type": "multiple",
    "question": "一台路由器收到报文后按照ACL 匹配流程进行匹配时，匹配结果只有两种:“匹配”或 “不匹配”。那么以下场景中，其返回匹配结果为“匹配”的是哪些项?",
    "questionImage": null,
    "options": [
      "A. 设备配置了ACL，但ACL 中无规则",
      "B. 匹配了ACL，但匹配动作为“permit”",
      "C. 匹配了ACL，但匹配动作为“deny”",
      "D. 设备未配置ACL"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": null,
    "explanationImage": "images/q273_expl.jpeg"
  },
  {
    "id": 274,
    "type": "multiple",
    "question": "某华为路由器配置的IP-Prefix 如下所示，那么以下可匹配成功且执行“permit”动作的 是哪些路由信 息?",
    "questionImage": "images/q274.jpeg",
    "options": [
      "A. 10.1.2.0/25",
      "B. 10.1.2.5/32",
      "C. 10.1.1.0/24",
      "D. 10.1.1.2/32"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": null,
    "explanationImage": null
  },
  {
    "id": 275,
    "type": "multiple",
    "question": "在IS-IS 网络中，会选举出类似OSPF 中DR 的存在，即选举DIS。那么以下关于它们 相同点的描述，错误的是哪些项?",
    "questionImage": null,
    "options": [
      "A. DIS 和DR 的选举规则一样，均是先比较优先级，再比较Router-ID",
      "B. DIS 和DR 都有备份设备",
      "C. DIS 和DR 缺省均不可以抢占",
      "D. DIS 和DR 的优先级设置为0 后，均不可参与选举"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q275_expl.jpeg"
  },
  {
    "id": 276,
    "type": "multiple",
    "question": "在IS-IS 网络中，路由器发送LSP 报文交换链路状态信息，该报文分为Leve1-1 LSP 和Leve1-2 LSP 两种，且有着相同的报文格式。其中，LSP 报文中的LSP ID 由以下哪些部 分组成?",
    "questionImage": null,
    "options": [
      "A. System ID",
      "B. LSP 分片后的编号",
      "C. 伪节点ID",
      "D. Is Type"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": null,
    "explanationImage": "images/q276_expl.jpeg"
  },
  {
    "id": 277,
    "type": "multiple",
    "question": "IPv6 是网络层协议的第二代标准协议，也被称为Ipng。以下关于它和IPv4 比较的措 述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. IPv6 地址长度比IPV4 大得多，拥有的地址规模也更为成大",
      "B. IPv6 和IPv4 都支持通过地址自动配置方式使主机自动发现网络并获取IP 地址",
      "C. IPv6 报文头的处理比IPv4 更为复杂，但是增加了新的功能，扩展性更强",
      "D. IPv4 没有安全件设计，而IPv6 中支持到的安全"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q277_expl.jpeg"
  },
  {
    "id": 278,
    "type": "multiple",
    "question": "某企业管理员想配置BFD 单跳检测来实现直连链路的快速检测，以下哪些配置是管理 员的必选配置?",
    "questionImage": null,
    "options": [
      "A. 配置BFD 会话的远端标识符",
      "B. 配置BFD 会话的本地标识符",
      "C. 配置BFD 组播IP 地址",
      "D. 使能全局BFD 功能"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "除了配置BFD 组播IP 地址，其他都需要配置，标识符要两端",
    "explanationImage": "images/q278_expl_1.jpeg"
  },
  {
    "id": 279,
    "type": "multiple",
    "question": "BGP 为了解决AS 内部的IBGP 网络连接激增问题，除了使用路由反射器之外，还可 以使用联盟。以下关于联盟技术的描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. 所有联盟成员设备需要重新进行配置",
      "B. 联盟的子AS 之间是特殊的EBGP 连接，需要全连接",
      "C. 该技术适用于大规模网络",
      "D. 使用联盟不需要改变逻辑拓扑"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": null,
    "explanationImage": "images/q279_expl.jpeg"
  },
  {
    "id": 280,
    "type": "multiple",
    "question": "在OSPF 网络中，Router ID 用于在自治系统中唯一标识一台运行OSPF 的路由器，且 遵循一定的选举规则。以下哪些场景会触发重新选举Router ID?",
    "questionImage": null,
    "options": [
      "A. 配置了import-route，且重启了OSPF 进程",
      "B. 手动更改了OSPF 的Router ID，并重启了OSPF 进程",
      "C. 原来被选举为系统Router ID 的IP 地址被删除，且重新启动了OSPF 进程",
      "D. 重新配置了系统Router ID，并重启了OSPF 进程"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q280_expl.jpeg"
  },
  {
    "id": 281,
    "type": "multiple",
    "question": "在OSPF 网络中，为了减少LSDB 的大小，提供设备的性能，OSPF 定义了多种特殊区 域。其中，在完全NSA 区域中，可能存在以下哪些类型的LSA?",
    "questionImage": null,
    "options": [
      "A. 3 类LSA",
      "B. 描述缺省路由的7 类LSA",
      "C. 7 类LSA",
      "D. 描述缺省路由的3 类LSA"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q281_expl.jpeg"
  },
  {
    "id": 282,
    "type": "multiple",
    "question": "BGP 在建立对等体邻居时，会发送以下哪些报文?",
    "questionImage": null,
    "options": [
      "A. Update",
      "B. Keepalive",
      "C. Open",
      "D. Hello"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": null,
    "explanationImage": "images/q282_expl.jpeg"
  },
  {
    "id": 283,
    "type": "multiple",
    "question": "汇聚点RP 在组播网络中是一个重要的路由器，以下关于RP 的描述，正确的是哪些 项?",
    "questionImage": null,
    "options": [
      "A. 一个组播组可以拥有多个RP",
      "B. RP 是RPT 树的树根",
      "C. 一个RP 可以同时为多个组播组服务",
      "D. PIM-SM 网络中RP 只能通过手工指定"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": "一个组播组只能对应一个RP，PIM-SM 网络中RP 可以通过选举方式",
    "explanationImage": "images/q283_expl.jpeg"
  },
  {
    "id": 284,
    "type": "multiple",
    "question": "在RSTP 网络中，针对STP 的不足，对端口角色进行了改进。那么RSTP 可以包含以 下哪些角色?",
    "questionImage": null,
    "options": [
      "A. Backup 端口",
      "B. 指定端口",
      "C. Alternate 端",
      "D. 根端口"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q284_expl.jpeg"
  },
  {
    "id": 285,
    "type": "multiple",
    "question": "某华为路由器使用ACL 控制可Telnet 登录的用户，其ACL 配置信息如下所示，那么 以下主机IP 地址中，可Telnet 登录设备的有哪些项?",
    "questionImage": null,
    "options": [
      "A. 172.16.106.1",
      "B. 172.16.106.5",
      "C. 172.16.105.1",
      "D. 172.16.105.3"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q285_expl.jpeg"
  },
  {
    "id": 286,
    "type": "multiple",
    "question": "如图所示，R1 通告BGP 路由给EBGP 对等体，以下关于该过程的描述，正确的是哪 些 项?",
    "questionImage": "images/q286.jpeg",
    "options": [
      "A. R2 收到该路由传递给R3 时，会保持路由的Next_Hop 属性值不变",
      "B. 该路由中包含了这条路由的Origin 属性",
      "C. R1 只发送增量更新路由",
      "D. 该路由中的Next_Hop 属性为自己的UDP 连接源地址"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": "Next_Hop 和Origin 都是公认必遵属性，该路由会包含该属性；R2 会保持路由的 Next_Hop 属性值不变BGP 路由器只发送增量的BGP 路由更新，或进行触发式更新BGP 是使用TCP 建立连接，不是UDP",
    "explanationImage": null
  },
  {
    "id": 287,
    "type": "multiple",
    "question": "BGP 在发送路由更新报文时，一定会携带以下哪些属性?",
    "questionImage": null,
    "options": [
      "A. AS_Path",
      "B. MED",
      "C. Local_Preference",
      "D. Next_Hop"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": "一定携带公认必遵属性",
    "explanationImage": null
  },
  {
    "id": 288,
    "type": "multiple",
    "question": "在OSPF 网络中，区域内通过算法避免环路的发生，但区域间可能存在环路，因此 OSPF 定义了区域间路由的防环机制。那么以下关于该防环机制的描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. 非骨干区域之间不能直接传递区域间路由",
      "B. 区域间路由需经由Area0 中转",
      "C. 所有非骨干区域必须与Area0 直接相连",
      "D. ABR 不能将描述到达某个区域内网段路由的3 类LSA 再注入回该区域"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q288_expl_1.jpeg"
  },
  {
    "id": 289,
    "type": "multiple",
    "question": "数据中心是一整套包括机房在内复杂的设施，正常在部署数据中心时会涉及以下哪些 设备?",
    "questionImage": null,
    "options": [
      "A. 防火墙",
      "B. 存储",
      "C. 服务器",
      "D. 交换机"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q289_expl.jpeg"
  },
  {
    "id": 290,
    "type": "multiple",
    "question": "在OSPF 网络中，以下哪些网络类型建立OSPF 邻居关系时，需确保在同一网段，且 掩码要一致?",
    "questionImage": null,
    "options": [
      "A. P2MP",
      "B. Point-to-point",
      "C. NBMA",
      "D. Broadcast"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "跟进官方资料。除了P2P 不要求，其他都要求",
    "explanationImage": "images/q290_expl.jpeg"
  },
  {
    "id": 291,
    "type": "multiple",
    "question": "VRF 又称VPN 实例，可以帮助VPN 技术实现用户隔离，是一种网络虚拟化技术。正 常情况下在物理设备上可以创建多个VPN 实例，每个VPN 实例拥有独立的表项。那么以 下哪些资源是VPN 实例可以独立拥有的?",
    "questionImage": null,
    "options": [
      "A. 路由表",
      "B. MAC 地址表",
      "C. 接口",
      "D. 路由协议进程"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q291_expl.jpeg"
  },
  {
    "id": 292,
    "type": "multiple",
    "question": "在WLAN 网络中，HSB 主备服务主要负责在两个互为备份的设备间建立主备备份通 道，维护主备通道的链路状态。其中，HSB 业务实时备份时，可备份以下哪些信息?",
    "questionImage": null,
    "options": [
      "A. CAPWAP 隧道信息备份",
      "B. AP 表项备份",
      "C. 用户数据信息备份",
      "D. DHCP 地址信息备份"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q292_expl.jpeg"
  },
  {
    "id": 293,
    "type": "multiple",
    "question": "若一个MST 域内有多台交换机，那么在部署MSTP 时，需要确保以下哪些参数必须 一致?",
    "questionImage": null,
    "options": [
      "A. 域名",
      "B. VLAN 与生成树实例的映射关系",
      "C. 都运行了MSTP 功能",
      "D. MSTP 修订级别"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q293_expl.jpeg"
  },
  {
    "id": 294,
    "type": "multiple",
    "question": "在OSPF 视图下，网络工程师可以使用命令import-route 引入以下哪些路由?",
    "questionImage": null,
    "options": [
      "A. 直连路由",
      "B. OSPF 其他进程路由",
      "C. 静态路由",
      "D. BGP 路由"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q294_expl.jpeg"
  },
  {
    "id": 295,
    "type": "multiple",
    "question": "在OSPF 网络中，根据链路层协议类型，将接口的网络类型分为了四大类;而IS-IS 也 根据物理链路的不同，将接口的网络类型分为了以下哪些类型?",
    "questionImage": null,
    "options": [
      "A. Broadcast",
      "B. NBMA",
      "C. P2MP",
      "D. P2P"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q295_expl.jpeg"
  },
  {
    "id": 296,
    "type": "multiple",
    "question": "在MQC 中流量行为支持以下哪些可执行动作?",
    "questionImage": null,
    "options": [
      "A. 过滤报文",
      "B. 重新标记报文优先级",
      "C. 流量统计",
      "D. 为报文添加VLAN Tag",
      "E. 为报文执行策略路由"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": null,
    "explanationImage": "images/q296_expl.jpeg"
  },
  {
    "id": 297,
    "type": "multiple",
    "question": "BGP 设备在发送Open 消息建立对等体连接时，会携带以下哪些信息?",
    "questionImage": null,
    "options": [
      "A. Router ID",
      "B. Hol",
      "C. time",
      "D. NLRI",
      "E. 本地自治系统号"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q297_expl.jpeg"
  },
  {
    "id": 298,
    "type": "multiple",
    "question": "以下关于BGP 中Local Preference 属性的描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. Local Preference 属性可以传递给所有BGP 邻居",
      "B. 该属性在传递时除非受路由策略影响，否则Local Preference 值不变",
      "C. Local Preference 属性值越大则BGP 路由越优",
      "D. 缺省的Local Preference 值为0"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": null,
    "explanationImage": "images/q298_expl.jpeg"
  },
  {
    "id": 299,
    "type": "multiple",
    "question": "在网络中，每个路由器都有本地核心路由表和协议路由表。其中，本地核心路由表中 的一条路由条目存在多个关键字段，主要包括以下哪些内容?",
    "questionImage": null,
    "options": [
      "A. 学习此路由的入接口",
      "B. 此路由的目的地址",
      "C. 此路由的路由协议优先级",
      "D. 学习此路由的路由协议"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": "A 是路由转发的出接口",
    "explanationImage": "images/q299_expl.jpeg"
  },
  {
    "id": 300,
    "type": "multiple",
    "question": "路由协议是路由器之间维护路由表的规则，用于发现路由，生成路由表，并指导报文 转发。其中，依据来源的不同，可将路由分为以下哪些类别?",
    "questionImage": null,
    "options": [
      "A. 静态路由",
      "B. 直连路由",
      "C. 外部路由",
      "D. 动态路由"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q300_expl.jpeg"
  },
  {
    "id": 301,
    "type": "multiple",
    "question": "VRRP 只有一种报文，即Advertisement 报文。以下关于该报文的描述，正确的是哪 些项?",
    "questionImage": null,
    "options": [
      "A. 该报文包含了VRRP 路由器的优先级",
      "B. 该报文以广播形式发送",
      "C. 该报文支持认证功能",
      "D. 该报文封装的VRRP 协议号为112"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q301_expl.jpeg"
  },
  {
    "id": 302,
    "type": "multiple",
    "question": "以下哪些协议既支持网络配置管理又支持网络监控管理",
    "questionImage": null,
    "options": [
      "A. NETCONF",
      "B. Telemetry",
      "C. SNMP",
      "D. LLDP"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": null,
    "explanationImage": "images/q302_expl.jpeg"
  },
  {
    "id": 303,
    "type": "multiple",
    "question": "在OSPF 网络中，有多种报文类型，且每种报文的作用各不相同。其中，Hello 报文的 主要作用包括以下哪些项?",
    "questionImage": null,
    "options": [
      "A. 邻居建立",
      "B. 邻居删除",
      "C. 邻居发现",
      "D. 邻居保持"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "没有邻居删除",
    "explanationImage": "images/q303_expl.jpeg"
  },
  {
    "id": 304,
    "type": "multiple",
    "question": "VRRP 选举完成后设备分为master 状态和Backup 状态，以下哪些事件只能由处于 master 状态的设备进行处理?",
    "questionImage": null,
    "options": [
      "A. 响应优先级比自己小的VRRP 通告报文",
      "B. 定时发送VRRP 通告报文",
      "C. 响应对虚拟IP 地址的ARP 请求",
      "D. 转发目的MAC 地址为虚拟MAC 地址的IP 报文"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q304_expl.jpeg"
  },
  {
    "id": 305,
    "type": "multiple",
    "question": "业务在设置访问通道时存在同一个访问需求有多种访问通道服务的情况，正常情况下 会废弃不安全的访问通道，而选择安全的访问通道。那么以下哪些项属于安全的访问通道?",
    "questionImage": null,
    "options": [
      "A. Telnet",
      "B. SNMPv2",
      "C. HTTPS",
      "D. SFTP"
    ],
    "answer": [
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q305_expl.jpeg"
  },
  {
    "id": 306,
    "type": "multiple",
    "question": "某企业新建网络，为了提高可靠性需要部署VRRP。为了防止配置错误导致网络不 通，工程师在部署VRRP 时需要注意以下哪些事项?",
    "questionImage": null,
    "options": [
      "A. VRRP 部署虚拟IP 时需要和接口的IP 地址在同一网段",
      "B. VRRP 备份组内各交换机上配置的VRRP 协议版本尽量保持一致，否则可能造成报文不能互通",
      "C. 不同备份组之间的虚拟IP 地址不能重复",
      "D. 可以通过手工配置VRRP 的虚拟MAC 地址来提高安全系数"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": null,
    "explanationImage": "images/q306_expl.jpeg"
  },
  {
    "id": 307,
    "type": "multiple",
    "question": "NETCONF 是一种网络配置协议，它用可编程的方式实现网络配置的自动化，从而简 化并加速网络服务部署。用户使用该协议可以实现以下哪些配置操作?",
    "questionImage": null,
    "options": [
      "A. 修改配置",
      "B. 恢复配置",
      "C. 删除配置",
      "D. 备份配置"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q307_expl.jpeg"
  },
  {
    "id": 308,
    "type": "multiple",
    "question": "邻居发现协议NDP 是IPv6 协议体系中一个重要的基础协议，扮演了重要的角色。它 可以支持以下哪些功能和特性?",
    "questionImage": null,
    "options": [
      "A. 地址解析",
      "B. 重复地址检测",
      "C. 重定向",
      "D. 跟踪邻居状态"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q308_expl.jpeg"
  },
  {
    "id": 309,
    "type": "multiple",
    "question": "路由属性是BGP 对路由的特定描述，以下关于BGP 属性的描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. 可选过渡属性是BGP 设备不识别此类属性会忽略该属性，且不会通告给其他对等体",
      "B. 可选属性是所有BGP 路由器都必须能够识别的属性",
      "C. 公认任意属性可能包括在某些Update 消息里",
      "D. 公认必遵属性必须包括在每个Update 消息里"
    ],
    "answer": [
      2,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q309_expl.jpeg"
  },
  {
    "id": 310,
    "type": "multiple",
    "question": "某企业使用OSPF 路由协议来实现网络通信，在某路由器执行命令display ospf lsdb 的回显如下所示。那么以下关于该设备的描述，正确的是哪些 项?",
    "questionImage": "images/q310.jpeg",
    "options": [
      "A. R1 发布的三类LSA 的老化时间为286",
      "B. R1 为ASBR 设备",
      "C. R1 的邻居的Router-lD 为10.2.2.2",
      "D. R1 运行在OSPF 骨干区域"
    ],
    "answer": [
      2,
      3
    ],
    "explanation": "R1 发布的三类LSA 其老化时间根据上图得知为282Sum-Asbr 是4 类LSA（不是5 类LSA），是由ABR 产生，linkstate ID 指的才是ASBR 的RID（10.2.2.2），AdvRouter （10.1.1.1）只是告诉其他设备去往ASBR 找我，因此R1 只是ABR，不是ASBR。",
    "explanationImage": "images/q310_expl.jpeg"
  },
  {
    "id": 311,
    "type": "multiple",
    "question": "从下关于IP 组播服务模型的描述，正确的是哪些项?",
    "questionImage": null,
    "options": [
      "A. 组播服务模型的分类是针对接收者主机的，对组播源没有区别",
      "B. SSM 模型中针对每一个(源，组)信息都会生成表项",
      "C. SSM 模型要求同一个源上不同的组播应用可以使用相同的ssm 地址来区分",
      "D. ASM 模型要求ASM 地址只能被一种组播应用"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": null,
    "explanationImage": "images/q311_expl.jpeg"
  },
  {
    "id": 312,
    "type": "judge",
    "question": "某网络结构和OSPF 分区如图所示，图中除了RTA 之外，RTB、RTC 和RTD 都是 ABR 路由器。",
    "questionImage": "images/q312.jpeg",
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "ABR 是区域边界路由器，用来将一个或多个非骨干区域连接到骨干区域的路由器， 可以是虚链路，题中未说明配置虚链路，因此RTD 不是ABR。",
    "explanationImage": null
  },
  {
    "id": 313,
    "type": "judge",
    "question": "ospf dr-priority 命令默认值为1，取值范围为0~255.",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "优先级默认为1，取值范围0-255",
    "explanationImage": null
  },
  {
    "id": 314,
    "type": "judge",
    "question": "MP-BGP 用于实现BGP-4 的的扩展以允许BGP 带多种网络层协议。这种扩展有很好的 后向兼容性，即一个支持MP-BGP 的路由器可以和一个仅支持BGP-4 的路由器交互",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q314_expl.jpeg"
  },
  {
    "id": 315,
    "type": "judge",
    "question": "在STP 网络中，只有指定端口会处理次优BPDU，而在RSTP 网络中，任何端口角色 都会处理次优BPDU",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q315_expl.jpeg"
  },
  {
    "id": 316,
    "type": "judge",
    "question": "路由器查找FIB 表时，若匹配表项中的Tunnel lD 为0，则表示匹配该项的报文通过 隧道转发，如:MPLS 隧道转发。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q316_expl.jpeg"
  },
  {
    "id": 317,
    "type": "judge",
    "question": "BGP 协议本身不发现路由，因此需要将其他路由引入到BGP 路由表，实现AS 间的路 由互通，但是只可以在BGP 中引入IGP 路由，而无法将BGP 路由引入到IGP 中。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q317_expl.jpeg"
  },
  {
    "id": 318,
    "type": "judge",
    "question": "在IGMPv1 中，查询器的选择由组播路由协议(比如PIM)决定。在IGMPV2 和IGMPv3 中，由IP 地址最大的设备接口充当查询器",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q318_expl.jpeg"
  },
  {
    "id": 319,
    "type": "judge",
    "question": "VRF 路由表里的OSPF 外部路由不允许被路由汇总(asbr-summary)",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "可以被路由汇总",
    "explanationImage": null
  },
  {
    "id": 320,
    "type": "judge",
    "question": "SFTP 相比于FTP 来讲更安全，因为使用了SSH 来提供文件传输时的保护，一般情况 下，SFTP 使用TCP 22 端口来进行数据的传输。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q320_expl.jpeg"
  },
  {
    "id": 321,
    "type": "judge",
    "question": "BGP 发起TCP 连接后，如果成功建立起TCP 连接，则关闭连接重传定时器。如果 TCP 连接建立不成功，则会在连接重传定时器超时后重新尝试建立连接。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "手册原话描述",
    "explanationImage": "images/q321_expl.jpeg"
  },
  {
    "id": 322,
    "type": "judge",
    "question": "在IS-IS 网络中，直连的两台路由器不管是P2P 网络类型或是Broadcast 网络类型， 缺省情况下，都是3 次握手建立邻居关系。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q322_expl.jpeg"
  },
  {
    "id": 323,
    "type": "judge",
    "question": "BGP 中Next Hop 属性记录了路由的下一跳信息，和IGP 中的下一跳一样，一定是邻 居接口的IP 地址。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "不一定是邻居接口的IP 地址，可以通过指定peer next-hop-local 把下一跳属性设为 自身的TCP 连接源地址",
    "explanationImage": null
  },
  {
    "id": 324,
    "type": "judge",
    "question": "当BGP 收到到达同一目的地的多条路由时，会根据选路规则选择出最优路由，因此无 法实现负载分担。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q324_expl.jpeg"
  },
  {
    "id": 325,
    "type": "judge",
    "question": "BGP 路由表路由数量通常比较大，传递大量的路由对设备来说是一个很大的负担，为 了减小路由发送规模，需要对发布的路由进行控制，只发送自己想要发布的路由或者只发 布对等体需要的路由。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q325_expl.jpeg"
  },
  {
    "id": 326,
    "type": "judge",
    "question": "在配置EBGP 时，缺省情况下EBGP 连接允许的最大跳数为1，即只能在物理直连链 路上建立EBGP 连接。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q326_expl.jpeg"
  },
  {
    "id": 327,
    "type": "judge",
    "question": "网络实体名称是一种特殊的NSAP，由区域地址和SystemID 组成，且SEL 固定取值 00，主要用于路由计算。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q327_expl.jpeg"
  },
  {
    "id": 328,
    "type": "judge",
    "question": "在IS-IS 网络中，每台路由器都至少拥有一个NET，若某台路由器同时配置了多个 NET，应确保这些NET 的SystemID 相同。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q328_expl.jpeg"
  },
  {
    "id": 329,
    "type": "judge",
    "question": "在IS-IS 网络中，区域是根据路由器来划分的，一台路由器只能属于一个区域，因此 IS-IS 路由器只需要维护当前所在区域的LSDB 即可。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "Level-1-2 路由器维护两个LSDB，Level-1 的LSDB 用于区域内路由，Level-2 的 LSDB 用于区域间路由。",
    "explanationImage": null
  },
  {
    "id": 330,
    "type": "judge",
    "question": "AI 时代的典型特征是关注数据，挖掘数据价值并提升AI 运行效率，因此AI 对数据中 心网络的核心诉求是要快，即低时延。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q330_expl.jpeg"
  },
  {
    "id": 331,
    "type": "judge",
    "question": "某企业办公网络中，运行了OSPF 路由协议且划分了多个OSPF 区域，为减少路由表 规模和优化设备资源利用率，该企业网络工程师可在ASBR 上执行路由汇总，减少区域间 的三类LSA。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "ABR 才是汇总三类，ASBR 是五类",
    "explanationImage": "images/q331_expl.jpeg"
  },
  {
    "id": 332,
    "type": "judge",
    "question": "如图所示，通过配置VRRP 与BFD 联动，当Backup 设备通过BFD 感知故障发生之 后，等待Master_Down_Timer 计时器超时后Backup 设备会立即切换VRRP 状态。",
    "questionImage": "images/q332.jpeg",
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "VRRP 备份组故障时，Backup 设备需要等待Master_Down_Interval 定时器超时后才 能感知故障并进行切换，切换时间通常在3 秒以上，在等待切换期间内，业务流量仍会发 往Master 设备，此时会造成用户流量丢失。通过在Backup 设备上配置VRRP 联动 BFD，使用BFD 会话快速检测VRRP 备份组间的通信故障，并在检测到故障时及时通知 VRRP 备份组升高Backup 设备的优先级，立即触发主备切换，实现了毫秒级的切换速 度，减少了流量的丢失。",
    "explanationImage": null
  },
  {
    "id": 333,
    "type": "judge",
    "question": "在OSPF 网络中，某台路由器收到一条LSA，检查发现该LSA 的checksum 错误，则 会忽略该LSA，并终止泛洪。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q333_expl.jpeg"
  },
  {
    "id": 334,
    "type": "judge",
    "question": "某企业使用OSPF 路由协议实现网络通信，为确保数据来源的合法性及安全性，开启 了OSPF 支持的所有认证方式。针对上述情况，OSPF 路由器将优先使用接口认证。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q334_expl.jpeg"
  },
  {
    "id": 335,
    "type": "judge",
    "question": "在OSPF 网络中，若两台Router-ID 相同的路由器运行在不同区域，且其中一台路由 器为ASBR，则会造成LSA 振荡。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "每个OSPF 进程的Router ID 要保证OSPF 的全网唯一，否则会导致邻居不能正常建 立、路由信息不正确的问题。",
    "explanationImage": null
  },
  {
    "id": 336,
    "type": "judge",
    "question": "在IP 组播中，RPF 路由只可以从单播路由和组播静态路由中选举产生。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q336_expl.jpeg"
  },
  {
    "id": 337,
    "type": "judge",
    "question": "在防火墙中，对于一个已经建立的会话表项，只有当它不断被报文匹配才有存在的必 要，如果长时间，不再需要该条会话表项了。此时，为了节约系统资源没有报文匹配，则 说明可能通信双方已经断开了连接系统会在一条表项连续未匹配一段时间后，将其删除。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q337_expl.jpeg"
  },
  {
    "id": 338,
    "type": "judge",
    "question": "在OSPF 网络中，若某台路由器收到一条LSA，发现本地LSDB 已存在，但收到的更 新，则会更新LSDB 并泛洪该LSA",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q338_expl.jpeg"
  },
  {
    "id": 339,
    "type": "judge",
    "question": "在IS-IS 网络中，同一Level-1 区域内的所有路由器必须配置相同的区域地址才能通 信，但同一Level-2 区域内的路由器配置不同的区域地址也可进行通信。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q339_expl.jpeg"
  },
  {
    "id": 340,
    "type": "judge",
    "question": "当设备遭到恶意攻击或者网络中出现错误配置时，会导致BGP 从邻居接收到大量的路 由，从而消耗大量设备的资源。因此管理员必须根据网络规划和设备容量，对运行时所使 用的资源进行限制。BGP 提供了基于对等体的路由控制，限定邻居发来的路由数量，这样 可以避免上述问题。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q340_expl.jpeg"
  },
  {
    "id": 341,
    "type": "judge",
    "question": "在BGP 中MED 属性仅在相邻两个AS 之间传递，收到此属性的AS 一方不会再将其通 告给任何其他第三方AS，同时，缺省情况下路由器只比较来自同一相邻AS 的BGP 路由 的MED 值，也就说如果去往同一个目的地的两条路由来自不同的相邻AS，则不进行 MED 值的比较。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q341_expl.jpeg"
  },
  {
    "id": 342,
    "type": "judge",
    "question": "BGP 存在两种对等体关系类型:EBGP 及IBGP，其中在配置EBGP 时，Peer 命令所指 定的对等体IP 地址要求路由可达，并且UDP 连接能够正确建立，",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "后半句有误，是TCP 连接能够正确建立",
    "explanationImage": null
  },
  {
    "id": 343,
    "type": "judge",
    "question": "BFD 提供了一个通用的、标准化的、跟介质无关的、协议无关的快速故障检测机制， 如果想要通过该机制检测链路是否连通，两端设备必须都需要支持该特性。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "一端不支持BFD 的情况下，可通过BFD Echo 功能实现。",
    "explanationImage": "images/q343_expl.jpeg"
  },
  {
    "id": 344,
    "type": "judge",
    "question": "在BGP 中notification 报文用于在改变路由策略后请求对等体重新发送路由信息。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "Notification 报文主要在发生错误或对等体连接被关闭的情况下使用，该消息携带各 种错误码（如定时器超时等），以及错误子码和错误信息。",
    "explanationImage": null
  },
  {
    "id": 345,
    "type": "judge",
    "question": "访问控制列表是路由策略中常用匹配工具之一，在一台路由器配置ACL 后，即可用于 匹配相应路由",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "只配置完ACL 无法匹配相应路由，还需要调用到策略，并应用策略到相应接口后才 能匹配相应路由",
    "explanationImage": null
  },
  {
    "id": 346,
    "type": "judge",
    "question": "某华为路由器配置了PBR，因为PBR 策略的优先级高于传统路由表，因此被匹配的 报文会优先根据PBR 的策略进行转发。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q346_expl.jpeg"
  },
  {
    "id": 347,
    "type": "judge",
    "question": "MQC 和PBR 均可在设备接口上调用，对接收和发送的报文进行流量过滤或控制报文 的转发路径",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "培训教材描述PBR 只能在接口入方向（接收方向）的报文进行过滤和控制；而MQC 可以应用在接口入方向和出方向，对接收和发送的报文行过滤和控制。",
    "explanationImage": "images/q347_expl_1.jpeg"
  },
  {
    "id": 348,
    "type": "judge",
    "question": "在RSTP 网络中，如果一个接口收到一个RST BPDU，发现自身缓存的RST BPDU 优 于收到的RST BPDU，则会直接丢弃收到的RST BPDU，不做其他回应。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q348_expl.jpeg"
  },
  {
    "id": 349,
    "type": "judge",
    "question": "互联网编号分配委员会将D 类地址空间分配给IPV4 组播使用，IPv4 地址一共32 位，D 类地址最高4 位为1111。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "D 类地址高四位为1110",
    "explanationImage": null
  },
  {
    "id": 350,
    "type": "judge",
    "question": "在IPv6 网络中，为了减少中间转发设备的处理压力，中间转发设备不对IPv6 报文进 行分片，报文的分片只在源节点进行。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q350_expl.jpeg"
  },
  {
    "id": 351,
    "type": "judge",
    "question": "当一个TCP 会话的两个连续报文到达防火墙的时间间隔大于该会话的老化时间时，为 保证网络的安全性，防火墙将从会话表中删除相应会话信息",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q351_expl.jpeg"
  },
  {
    "id": 352,
    "type": "judge",
    "question": "工程师配置组播协议之前，必须先使能IP 组播路由功能，使能IP 组播路由功能是配 置一切组播功能的前提",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "配置组播的第一步是需要使能开启组播路由功能后才配置后续",
    "explanationImage": null
  },
  {
    "id": 353,
    "type": "judge",
    "question": "IGMPv2 离组使用超时机制，组成员只能静默离组。在未超时的时间内，组播流量依 然会被组播路由器转发，因此存在缺陷",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "超时机制是v1 的，v2 有离组机制，成员离开之后会发成员离开报文",
    "explanationImage": "images/q353_expl.jpeg"
  },
  {
    "id": 354,
    "type": "judge",
    "question": "在IS-IS 广播网中，同一网段上的同一级别的路由器之间都会形成邻接关系，包括所 有的非DIS 路由器之间也会形成邻接关系。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "官方原文介绍的",
    "explanationImage": "images/q354_expl.jpeg"
  },
  {
    "id": 355,
    "type": "judge",
    "question": "在OSPF 网络中，7 类LSA 只能由NSSA 区域或STUB 区域中的ASBR 产生，用于描 述到达OSPF 域外的路由。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "7 类LSA 只能由NSSA 区域的ASBR 产生，用于描述到达OSPF 域外的路由。STUB 区域生成的是5 类。",
    "explanationImage": null
  },
  {
    "id": 356,
    "type": "judge",
    "question": "为了防止路由震荡，BGP 可以采用路由聚合提高网络的稳定性",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "路由聚合解决了两类问题，一是减轻了设备的负担，二是隐藏了明细的路由信息， 减少了路由震荡的影响。",
    "explanationImage": null
  },
  {
    "id": 357,
    "type": "judge",
    "question": "多主检测MAD 是一种检测和处理堆叠分裂的协议，有直连检测方式和代理检测方 式。在同一堆叠系统中，可同时配置两种检测方式,从而避免检查标记IP 和MAC 冲突对业 务产生影响。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q357_expl.jpeg"
  },
  {
    "id": 358,
    "type": "judge",
    "question": "USG 防火墙上提供了Local 区域，代表防火墙本身。凡是由防火墙主动发出的报文均 可认为是从Local 区域中发出，凡是需要防火墙响应并处理(不是转发)的报文均可认为是 由Local 区域接收。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "USG 防火墙的Local 区域用于标识设备自身。根据防火墙工作原理，本地生成或需 要本地处理的流量均属于Local 区域范畴，主动发出的报文源自Local 区域，需要本机处 理的报文由Local 区域接收。该描述与华为官方文档关于安全区域的定义一致。题目所述 情况准确对应Local 区域的功能特性，选项A 正确。（ai 解析）",
    "explanationImage": null
  },
  {
    "id": 359,
    "type": "judge",
    "question": "当OSPF 网络类型被指定为NBMA 网络时，必须在接口视图下使用osp in nbma peer xx.xx.x.xx 命令来互相指邻居，否则OSPF 邻居关系不会建立。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "NBMA 网络不支持组播和广播，因此在系统视图通过peer x.x.x.x 来单播指定邻居建 立，在接口无法指定邻居",
    "explanationImage": null
  },
  {
    "id": 360,
    "type": "judge",
    "question": "使用Route-Policy 工具可以使用if-match 了项匹配BGP 路由的Local Preference 属 性。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "通过查看配置命令if-match ？，if-match 没有匹配本地优先级属性的选项",
    "explanationImage": null
  },
  {
    "id": 361,
    "type": "judge",
    "question": "在使用Ethernet 链路层协议的IS-IS 网络中，缺省情况下，所有路由器都需要互相建 立邻接关系。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q361_expl.jpeg"
  },
  {
    "id": 362,
    "type": "judge",
    "question": "路由汇总对OSPF 路由进程占用的带宽、CPU 周期和内存资源有直接的影响",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "路由汇总又被称为路由聚合，即是将一组前缀相同的路由汇聚成一条路由，从而达 到减小路由表规模以及优化设备资源利用率的目的。降低了OSPF 路由进程占用的带宽、 CPU 周期和内存资源。",
    "explanationImage": null
  },
  {
    "id": 363,
    "type": "judge",
    "question": "NSSA 区域的ABR 不会向NSSA 泛洪4 类和5 类LSA，会将7 类LSA 转换成5 类LSA 泛洪给其他区域。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q363_expl.jpeg"
  },
  {
    "id": 364,
    "type": "judge",
    "question": "路由器查找FIB 表时，将报文的目的IP 地址和FIB 表中的各表项的掩码进行按位\"逻 辑或\"，得到的地址符合FIB 表中的网络地址则匹配。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "路由器在查找FIB 表时，并不是通过简单的按位“逻辑或”操作来匹配报文的目的IP 地址和FIB 表中的路由表项的。相反，它使用了一种更为复杂和精确的匹配机制，包括目 标地址匹配、最长匹配原则、优先级和默认路由等原则，以确保报文被正确地转发到目标 网络。",
    "explanationImage": null
  },
  {
    "id": 365,
    "type": "judge",
    "question": "某企业OSPF 网络的NSSA 区域引入了大量外部路由，现用户要求减少非特殊区域的 LSA 数量，那么该企业工程师可在NSSA 区域中的ABR 上，对由7 类LSA 转化成的5 类 LSA 进行路由汇总。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "在NSSA 区域中，ABR 执行7 类LSA 转化成5 类LSA 动作，此时它也是ASBR。若 配置路由汇总，则对由7 类LSA 转化成的5 类LSA 进行汇总。",
    "explanationImage": null
  },
  {
    "id": 366,
    "type": "judge",
    "question": "在OSPF 网络中，某一台路由器角色为ABR，则该路由器也肯定是BR。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q366_expl.jpeg"
  },
  {
    "id": 367,
    "type": "judge",
    "question": "在STP 网络中，若拓扑发生变更，必须先将拓扑变化信息传递给根桥，再由根桥向下 泛洪拓扑变更信息",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q367_expl.jpeg"
  },
  {
    "id": 368,
    "type": "judge",
    "question": "IGMP snooping 功能可以使交换机工作在三层时，通过侦听上游的三层设备和用户主 机之间发送的IGMP 报文来建立组播数据报文的三层转发表，管理和控制组播数据报文的 转发，进而有效抑制组播数据在三层网络中扩散。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "是二层，不是三层",
    "explanationImage": "images/q368_expl.jpeg"
  },
  {
    "id": 369,
    "type": "judge",
    "question": "在IPv6 中，当主机需要和目标主机通信时，必须先通过ARP 协议获得目的主机的链 路层地址。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "IPV6 使用的不是ARP 协议，用的是NDP 协议",
    "explanationImage": null
  },
  {
    "id": 370,
    "type": "judge",
    "question": "L2TP 本身不提供安全加密，因此需要借助其他安全手段比如IPSec，保证整个隧道的 安全，进行传输数据。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q370_expl.jpeg"
  },
  {
    "id": 371,
    "type": "judge",
    "question": "在IPV6 中每个接口只能有一个链路本地地址，为了避免链路本地地址冲突，推荐使 用链路本地地址的自动生成方式。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q371_expl.jpeg"
  },
  {
    "id": 372,
    "type": "judge",
    "question": "华为防火墙的默认安全区域不能删除，但是管理员可以手工修改安全优先级",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q372_expl.jpeg"
  },
  {
    "id": 373,
    "type": "judge",
    "question": "IPsec SA 是IPSec 的重要组成部分，用于为IKE SA 协商建立安全通道，但它本身是单 向的逻辑连接，因此两个IPSec 对等体之间的双向通信，最少需要建立两个SA 来分别对 两个方向的数据流进行安全保护。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q373_expl.jpeg"
  },
  {
    "id": 374,
    "type": "judge",
    "question": "VRRP 目前有两个版本，其中VRRPV2 仅适用于IPV4 网络，VRRPV3 仅适用于IPv6 网络。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q374_expl.jpeg"
  },
  {
    "id": 375,
    "type": "judge",
    "question": "在STP 网络中，为了避免环路，指定端口选举完成后必须等待足够长的时间，使全网 的端口状态全部确定后才能进行转发，针对STP 上述问题，RSTP 通过P/A 机制加快了下 游端口进人Forwarding 状态的速度。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q375_expl.jpeg"
  },
  {
    "id": 376,
    "type": "judge",
    "question": "IP 组播可以有效地节约网络带宽、降低网络负载，所以被广泛应用于IPTV、实时数 据传送和多媒体会议等网络业务中。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "IP 组播技术是一种网络通信方法，它允许网络中的数据包同时发送到多个特定的接 收者，而不是像广播那样发送到网络中的所有节点。这种方法避免了不必要的数据重复传 输。IP 组播被广泛应用于需要高效数据传输的业务中，如IPTV(网络电视)、实时数据传 送以及多媒体会议等。",
    "explanationImage": null
  },
  {
    "id": 377,
    "type": "judge",
    "question": "VPN 实例是一种虚拟化技术。一台物理设备上可以创建多个VPN 实例，每个VPN 实 例拥有独立的接口、路由表和路由协议进程等。即使同一台设备有多个相同的网段，也不 用担心IP 地址冲突的问题。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "独立的路由表，设备有多个相同的网段，也不用担心IP 地址冲突",
    "explanationImage": "images/q377_expl.jpeg"
  },
  {
    "id": 378,
    "type": "judge",
    "question": "一个Route-policy 中可包含多个节点，每个节点也可配置多个if-match 和apply 子 句。当一条路由与某个节点的所有if-match 都匹配后，才会执行该节点的apply 子句",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q378_expl.jpeg"
  },
  {
    "id": 379,
    "type": "judge",
    "question": "为了避免路由聚合可能引起的路由环路，BGP 设计AS_Set 属性，该属性是一种有序 的AS_PATH 属性，标明聚合路由所经过的AS 号。当聚合路由重新进入AS_Set 属性中列 出的任何一个AS 时，BGP 将会检测到自己AS 号在聚合路由的AS_Set 属性中，于是会丢 弃该聚合路由，从而避免了路由环路的形成",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q379_expl.jpeg"
  },
  {
    "id": 380,
    "type": "judge",
    "question": "路由器配置访问控制列表时，可以通过ACL 编号标识ACL，也可以通过名称来标识 ACL。其中，配置命名型ACL 时，需手工指定ACL 的名字和ACL 的编号。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "配置命名型ACL 时，ACL 编号指定不是必要的",
    "explanationImage": null
  },
  {
    "id": 381,
    "type": "judge",
    "question": "在WLAN 网络中，网络工程师可以通过VLAN POOL 将接入的用户分配到不同的 VLAN 中，从而减少广播域，提升网络性能。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q381_expl.jpeg"
  },
  {
    "id": 382,
    "type": "judge",
    "question": "在对等体关系建立过程中和建立之后都可能发生错误连接，当BGP 检测到错误状态 时，就会向对等体发送Notification，告知对端错误原因",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q382_expl.jpeg"
  },
  {
    "id": 383,
    "type": "judge",
    "question": "组播并不独立维护网络中的单播路由信息，在创建PIM 路由表项时必须依赖网络中现 有的单播路由信息执行RPF 检查。如果到达某确定地址的单播路由不存在，则无法通过 RPF 检查。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "rpf 可以依靠三种路由表进行查找。有单播路由表，mbgp 路由，组播静态路由。不 单单依赖于单播路由",
    "explanationImage": "images/q383_expl.jpeg"
  },
  {
    "id": 384,
    "type": "judge",
    "question": "当BGP 路由发生变化时，BGP 需要对非直连的下一跳重新进行迭代。如果不对迭代 后的路由进行任何限制，则BGP 可能会将下一跳迭代到一个错误的转发路径上，从而造 成流量损失。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q384_expl.jpeg"
  },
  {
    "id": 385,
    "type": "judge",
    "question": "在路由器上配置ACL 时，可通过指定一个唯一的数字标识该ACL，或通过名称代替编 号来标识ACL。其中，命名型ACL 一旦创建成功，用户便无法修改，只能删除该ACL，重 新配置",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": " 命名型ACL 一旦创建成功，用户便无法修改其名称，但是ACL 内的条目增减依然可以修 改，考试注意题目中是否说的是用户无法修改其名称，如果写的是用户无法修改其名称， 则选择正确。",
    "explanationImage": "images/q385_expl.jpeg"
  },
  {
    "id": 386,
    "type": "judge",
    "question": "一般情况下，BGP 都应用于复杂的网络环境中，路由变化十分频繁。而频繁的路由振 荡会消耗大量的带宽资源和CPU 资源，严重时会影响到网络的正常工作，这是BGP 应用 过程中无法避免的问题，也无法解决。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q386_expl.jpeg"
  },
  {
    "id": 387,
    "type": "judge",
    "question": "在BGP 中非客户机角色既不是RR 也不是客户机的IBGP 设备，在AS 内部非客户机 与RR 之间，以及所有的非客户机之间必须建立全连接关系",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "AS 内部非客户机之间需要建立全互联，因为非客户机发布的路由，RR 只会反射给 客户机",
    "explanationImage": "images/q387_expl.jpeg"
  },
  {
    "id": 388,
    "type": "judge",
    "question": "访问控制列表可以匹配路由或数据，但不能同时匹配IP 地址前缀长度和掩码长度。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "匹配IP 地址前缀长度和掩码长度是IP 前缀列表才能实现",
    "explanationImage": null
  },
  {
    "id": 389,
    "type": "judge",
    "question": "在OSPF 网络中，某台路由器的Router ID 配置错误，应在OSPF 进程1 中配置为 1.1.1.1。那么网络工程师可在该设备的系统视图下，通过命令ospf 1 router-id 1.1.1.1 直接 修改。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q389_expl.jpeg"
  },
  {
    "id": 390,
    "type": "judge",
    "question": "在OSPF 网络中，OSPF 路由器是通过交互LSA 实现链路状态数据库同步的，若一台 OSPF 路由器发现收到的LSA 本地没有，则会更新LSDB 并泛洪该LSA",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q390_expl.jpeg"
  },
  {
    "id": 391,
    "type": "judge",
    "question": "IS-IS 的DIS 和OSPF 的DR 一样，在广播类型网络中需要进行选举。但不同的是， OSPF 的DR 默认是抢占模式而IS-IS 的DIS 默认是非抢占模式。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q391_expl.jpeg"
  },
  {
    "id": 392,
    "type": "judge",
    "question": "缺省情况下，如果没有配置Router ID 但配置了多个LoopBack 接口地址，那么BGP 会优选Loopback 接口中最大的IP 地址作为Router ID",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q392_expl.jpeg"
  },
  {
    "id": 393,
    "type": "judge",
    "question": "Telemetry 采样的原始数据只可来自网络设备的转发面，目前支持采集设备的接口流 量统计、CPU 或内存数据等信息。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q393_expl.jpeg"
  },
  {
    "id": 394,
    "type": "judge",
    "question": "在OSPF 网络中，若两台Router-ID 相同的非直连路由器运行在同一区域，会导致1 类LSA 计算出现问题。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "两台不直连同区域的路由器router-id 一致：邻居关系可以正常建立，但是LSDB 中 会只有一份一类LSA，导致SPF 树没有办法计算，选择先学到的1 类LSA。",
    "explanationImage": null
  },
  {
    "id": 395,
    "type": "judge",
    "question": "在WLAN 三层漫游场景中，用户漫游前后由于所在子网不同，为使得用户漫游后仍能 正常访问漫游前的网络需将用户流量通过隧道转发到原来的子网进行中转。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q395_expl.jpeg"
  },
  {
    "id": 396,
    "type": "judge",
    "question": "BGP 是一种实现自治系统AS 之间的路由可达，并选择最佳路由的矢量性协议。它使 用TCP 作为其传输层协议(端口号为179)，并周期性进行路由更新",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "前面描述没问题，最后一句话不对，是触发更新",
    "explanationImage": "images/q396_expl.jpeg"
  },
  {
    "id": 397,
    "type": "judge",
    "question": "VRRP 中，主备设备都会对虚拟IP 地址的ARP 请求进行响应，以便故障时进行快速 切换。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q397_expl.jpeg"
  },
  {
    "id": 398,
    "type": "judge",
    "question": "二层交换机的以太网接口支持多种接口类型，但无论哪种接口类型，都会存在缺省 VLAN ID，且在华为交换机上，该缺省VLAN ID 为11。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q398_expl.jpeg"
  },
  {
    "id": 399,
    "type": "judge",
    "question": "管理员在配置组播协议时，如果RPF 接口忘记使能PIM 协议，则会导致组播分发树 无法正确建立。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "配置组播协议时，第一步是使能组播路由功能，第二步是在接口使能PIM 协议，都 是必配步骤",
    "explanationImage": null
  },
  {
    "id": 400,
    "type": "judge",
    "question": "当SSH 客户端首次访问SSH 服务器，而SSH 客户端没有配置SSH 服务器端的公钥 时，用户可以选择使能SSH 客户端首次认证继续访问该SSH 服务器，并在SSH 客户端保 存该主机公钥。这样当SSH 客户端下次访问该SSH 服务器时，可以用已保存的主机公钥 来认证该SSH 服务器。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q400_expl.jpeg"
  },
  {
    "id": 401,
    "type": "judge",
    "question": "当防火墙接收到一个报文且没有命中会话表时会直接丢弃，从而防止外部攻击，可以 有效保障企业内部的信息安全。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q401_expl.jpeg"
  },
  {
    "id": 402,
    "type": "judge",
    "question": "在华为路由器上，若未配置ACL 或配置了ACL 但没有配置规则，那么它们返回ACL 的匹配结果均为不匹配。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q402_expl.jpeg"
  },
  {
    "id": 403,
    "type": "judge",
    "question": "某企业管理员在配置VPN 实例时为了减轻工作量，可以先将接口IP 地址和特性通过 脚本批量导入到设备，然后再手工将接口与相关VPN 实例绑定。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "先配置接口ip 再将接口绑定到vpn 实例的话会导致先前接口配置的ip 丢失，还得 重新配，并没有减轻工作量",
    "explanationImage": "images/q403_expl.jpeg"
  },
  {
    "id": 404,
    "type": "judge",
    "question": "使用ACL 进行路由匹配时，不管是基本ACL 还是高级ACL，或者是用户ACL，缺省 情况下它们的ACL 规则步长均为10。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q404_expl.jpeg"
  },
  {
    "id": 405,
    "type": "judge",
    "question": "在OSPF 或IS-IS 网络中，路由器可以通过命令filter-policy import 过滤掉其他邻居转 发给它的LSA。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "filter-policy import 只能过滤路由条目，无法过滤LSA 信息",
    "explanationImage": null
  },
  {
    "id": 406,
    "type": "judge",
    "question": "在设备上部署DHCP Snooping 功能时，如果需要上线的用户数目超过了设备支持的 DHCP Snooping 绑定表规格，那么超出的用户将无法上线。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q406_expl.jpeg"
  },
  {
    "id": 407,
    "type": "judge",
    "question": "在大型WLAN 网络中，网络工程师通常采用漫游技术实现无线终端在不同AP 覆盖范 围之间移动的同时确保用户业务不中断。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "基本概念，WLAN 漫游是指STA 在不同AP 覆盖范围之间移动且保持用户业务不中 断的行为。",
    "explanationImage": null
  },
  {
    "id": 408,
    "type": "judge",
    "question": "在WLAN 网络跨AC 漫游场景中，一个AC 可以同时作为多个漫游组的漫游服务器， 但是自身只能加入一个漫游组。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "官方文档原文介绍",
    "explanationImage": "images/q408_expl.jpeg"
  },
  {
    "id": 409,
    "type": "judge",
    "question": "在某路由器的OSPF 进程中，可使用命令import-route 将其他OSPF 进程的路由引入 到当前OSPF 进程中",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q409_expl.jpeg"
  },
  {
    "id": 410,
    "type": "judge",
    "question": "在STP 网络中，用于角色选举的参数，如:根桥ID、根路径开销、网桥ID 等，均为 BPDU 报文中的字段。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q410_expl.jpeg"
  },
  {
    "id": 411,
    "type": "judge",
    "question": "二层交换机的以太网接口有多种类型，其中，一个Access 接口只能加入到一个VLAN 中，而一个Trunk 接口可以同时允许多个VLAN 的数据帧通过。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q411_expl.jpeg"
  },
  {
    "id": 412,
    "type": "judge",
    "question": "工程师在配置VRRP 时需要注意各备份组之间的虚拟IP 地址不能重复，但是同属一 个备份组的设备接口可以使用不同的VRID。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q412_expl.jpeg"
  },
  {
    "id": 413,
    "type": "judge",
    "question": "在三层网络中，所有路由协议自身都拥有故障检查机制，但是由于响应时间较慢，在 发生故障时可能会造成大量数据丢失。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "动态路由协议拥有故障检查机制，但是静态路由协议本身就没有故障检查机制",
    "explanationImage": "images/q413_expl.jpeg"
  },
  {
    "id": 414,
    "type": "judge",
    "question": "设备在首次创建单跳BFD 会话时，必须绑定对端IP 地址和本端相应接口，且创建后 不可修改。如果需要修改，则只能删除后重新创建。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q414_expl.jpeg"
  },
  {
    "id": 415,
    "type": "judge",
    "question": "VRRP 默认是抢占模式，当Backup 路由器发现Master 路由器的优先级比自己更低 时，它将立即切换至Master 状态，成为新的Master 路由器。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q415_expl.jpeg"
  },
  {
    "id": 416,
    "type": "judge",
    "question": "IPv6 中的接口ID 可以手工配置、系统自动生成，或基于IEEE EUI-64 规范生成。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q416_expl.jpeg"
  },
  {
    "id": 417,
    "type": "judge",
    "question": "IGMP Snooping Proxy 功能在IGMP Snooping 的基础上使交换机代替上游三层设备向 下游主机发送IGMP Query 报文和代替下游主机向上游设备发送IGMP Report 和Leave 报 文，这样能够有效的节约上游设备和本设备之间的带宽。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q417_expl.jpeg"
  },
  {
    "id": 418,
    "type": "judge",
    "question": "在OSPF 网络中，路由器发送的第一个DD 报文中的I 位、M 位和MS 位都会置1。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q418_expl.jpeg"
  },
  {
    "id": 419,
    "type": "judge",
    "question": "广域网是连接不同地区局域网或城域网通信的远程网，常用于实现园区网络、数据中 心网络的互联。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q419_expl.jpeg"
  },
  {
    "id": 420,
    "type": "judge",
    "question": "在VRRP 组网中，如果用户未配置VRRP 监视上行端口，则当VRRP 备份组中的 Master 设备的上行接口或者链路出现故障时，此时主备不会发生切换，导致出现流量黑 洞。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q420_expl.jpeg"
  },
  {
    "id": 421,
    "type": "judge",
    "question": "某企业管理员在日常检查中发现部分交换机的端口没有使用，因此他登录到设备上将 相关端口手工关闭，这样可以进一步保障设备安全。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "没用的端口关闭，避免设备乱接",
    "explanationImage": null
  },
  {
    "id": 422,
    "type": "judge",
    "question": "在OSPF 网络中，属于Area0 的IR 肯定是BR，而ASBR 不一定是ABR.",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "IR 是指区域内部路由器，同时题干说的是属于Area0 的IR；而BR 骨干路由器是只 要一个接口属于区域0 即可，因此属于Area0 的IR 肯定是BR；ASBR 不一定是ABR。",
    "explanationImage": "images/q422_expl.jpeg"
  },
  {
    "id": 423,
    "type": "judge",
    "question": "GRE 是一种二层VPN 封装技术，可以对某些数据链路层协议的报文进行封装，最后 使封装后的报文都能够在IP 网铬中传输。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q423_expl.jpeg"
  },
  {
    "id": 424,
    "type": "judge",
    "question": "在VRRP 组网中，当VRRP 设备发送ARP 老化探测报文时，ARP 老化探测报文中源 IP 地址会采用接口的IP 地址，而不会采用虚拟IP 地址。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q424_expl.jpeg"
  },
  {
    "id": 425,
    "type": "judge",
    "question": "某企业网络中，用户要求研发人员的流量需按照特定的转发路径进行数据转发，而非 研发人员的流量则根据路由表进行转发。针对上述需求，可通过配置filter-policy 实现。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "可通过配置PBR 策略路由实现",
    "explanationImage": null
  },
  {
    "id": 426,
    "type": "judge",
    "question": "在BGP 中AS_Path 属性按矢量顺序记录了某条路由从本地到目的地址所要经过的所有 AS 编号，如果BGP Speaker 将这条路由通告给IBGP 对等体时，会在Open 报文中创建一 个空的AS_Path 列表，从而避免了AS 间的路由环路。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "当BGP Speaker 将这条路由通告到本地AS 时，便会在Update 消息中创建一个空的 AS_Path 列表（因为必须带有此属性，并不是为了避免AS 间环路）。AS 间的环路是通过 AS 之间路由通告的时候记录的AS 列表来避免的，而不是AS 内的空列表",
    "explanationImage": null
  },
  {
    "id": 427,
    "type": "judge",
    "question": "在OSPF 网络中，NSSA 区域与STUB 区域都是为了减少LSA 数量，两者最主要的区 别在于，NSSA 区域可以引入外部路由，并同时接收OSPF 其他区域引入的外部路由。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "NSSA 区域可以引入外部路由，但是不会接收OSPF 其他区域引入的外部路由",
    "explanationImage": null
  },
  {
    "id": 428,
    "type": "judge",
    "question": "在BGP 对等体建立后，改变BGP 的Router ID 会导致BGP 对等体关系重置。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q428_expl.jpeg"
  },
  {
    "id": 429,
    "type": "judge",
    "question": "在IS-IS 网络中，Level-1 路由器只能通过Level-1-2 路由器接入IS-IS 骨干区域从而访 问其他区域。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q429_expl.jpeg"
  },
  {
    "id": 430,
    "type": "judge",
    "question": "在IS-IS 网络中，一台路由器只能属于一个区域；而在OSPF 网络中，一台路由器的不 同接口可以属于不同的区域。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q430_expl.jpeg"
  },
  {
    "id": 431,
    "type": "judge",
    "question": "运行BGP 的路由器在Connect 状态下，BGP 会启动连接重传定时器，等待TCP 完成 连接，如果连接重传定时器超时，BGP 仍没有收到BGP 对等体的响应，那么BGP 继续尝 试和其它BGP 对等体进行TCP 连接，并停留在Connect 状态。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q431_expl.jpeg"
  },
  {
    "id": 432,
    "type": "judge",
    "question": "在配置组播协议时，需要注意运行IGMP 高版本的交换机可以识别低版本的成员报 告，但是低版本的交换机不能识别高版本的成员报告。为了保证IGMP 的正常运行，建议 在交换机上配置和成员主机相同或高于成员主机的版本。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q432_expl.jpeg"
  },
  {
    "id": 433,
    "type": "judge",
    "question": "在OSPFv2 网络中，一台路由器可以同时运行多个不同的OSPF 进程，并可以将同一 个接口网段宣告进不同的进程中，它们之间是互不影响，彼此独立的。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "OSPF 支持多进程，在同一台设备上可以运行多个不同的OSPF 进程,不同OSPF 进程 之间相互独立。但是设备的一个接口只能属于某一个OSPF 进程。",
    "explanationImage": null
  },
  {
    "id": 434,
    "type": "judge",
    "question": "在OSPF 网络中，若网络类型为NBMA，则路由器会以单播形式发送所有协议报文;若 网络类型为Broadcast，则路由器会以组播形式发送所有协议报文。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q434_expl.jpeg"
  },
  {
    "id": 435,
    "type": "judge",
    "question": "路由器分别定义了外部优先级和内部优先级，路由器选择路由时会先比较路由的内部 优先级，若内部优先级相同，则比较外部优先级，数值越小越优",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q435_expl.jpeg"
  },
  {
    "id": 436,
    "type": "judge",
    "question": "在OSPF 网络中，若将某未端区域设置为STUB 区域，则该区域内不能存在ASBR.",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "若将某未端区域设置为STUB 区域，则该区域内不能存在ASBR，如果存在ASBR， 那就变成NSSA 区域了",
    "explanationImage": null
  },
  {
    "id": 437,
    "type": "judge",
    "question": "用户购买设备后，若需要使用BFD 增值特性时，需获取设备对应功能或资源的 License，以满足业务的需求。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q437_expl.jpeg"
  },
  {
    "id": 438,
    "type": "judge",
    "question": "二层交换机支持多种以太网接口类型，其中hybrid 接口与trunk 接口一样，可以允许 多个vlan 的数据帧通过，且可以指定hybrid 接口在发送某个vlan 的数据帧时是否携带 Tag。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q438_expl.jpeg"
  },
  {
    "id": 439,
    "type": "judge",
    "question": "在OSPF 网络中，若两台Router-ID 相同的直连路由器运行在同一区域内，会导致DD 报文的主从无法选举。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "当两台OSPF 路由器交换DD 报文时，首先需要确定双方的主从关系，RouterID 大 的一方会成为Master。若两台Router-ID 相同的直连路由器运行在同一区域内，将无法确 认主从。",
    "explanationImage": null
  },
  {
    "id": 440,
    "type": "judge",
    "question": "某大型企业部署WLAN 网络，要求减少广播域的同时，确保无线用户多次上线时可分 配相同的VLAN 和IP 地址，则可以通过配置VLAN Pool 的顺序分配算法实现。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q440_expl.jpeg"
  },
  {
    "id": 441,
    "type": "judge",
    "question": "双向路由重发布是指在边界路由器上把两个路由域的路由相互引入，但是容易造成次 优路由和路由环路等问题。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q441_expl.jpeg"
  },
  {
    "id": 442,
    "type": "judge",
    "question": "在OSPF 网络中，两台直连路由器，一台设备的网络类型为P2P，另一台为P2MP。 针对以上场景，若将两台设备的Hello 时间修改一致后，则不影响邻居的建立及LSDB 的 同步。",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "NBMA 只能与NBMA 建立full 邻接关系，与其他网络类型都无法建立FULL 的邻居关 系；（单播发现邻居）broadcast 与P2P，能建立full 邻接关系，但不能正常计算路由； （构建的拓扑不一致）broadcas 与P2MP，通过修改hello/dead timer 可以建立full 邻接 关系，但也不能计算路由；P2P 与P2MP，通过修改hello/dead timer 可以建立full 邻接关 系，路由计算也正常",
    "explanationImage": null
  },
  {
    "id": 443,
    "type": "judge",
    "question": "在WLAN 网络解决方案中，可采用iMaster NcE-Campus 作为准入服务器，对无线用 户进行身份验证.",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": null,
    "explanationImage": "images/q443_expl.jpeg"
  },
  {
    "id": 444,
    "type": "judge",
    "question": "某WLAN 网络中，AC 与AP 为三层组网，且AC 与AP 均采用IPv6 地址。此时AP 可 通过DHCPv6 服务器响应报文中所携带的Option43 字段来获取AC 的IPv6 地址fc00:1::1.",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "Option43 字段是IPV4 环境的，Option52 才是IPV6 使用的",
    "explanationImage": "images/q444_expl.jpeg"
  },
  {
    "id": 445,
    "type": "judge",
    "question": "路由聚合是将多条路由合并的机制，BGP 在IPV6 网络中支持自动聚合和手动聚合两 种方式",
    "questionImage": null,
    "options": [
      "对",
      "错"
    ],
    "answer": [
      1
    ],
    "explanation": "BGP 在IPv4 网络中支持自动聚合和手动聚合两种方式,而在IPv6 网络中仅支持手动 聚合",
    "explanationImage": null
  },
  {
    "id": 446,
    "type": "fill",
    "question": "如图所示，在MA 网络中，若要实现R1 一定为DR，R2 一定为BDR，R3、R4、R5 不参与选举，那么R1 的dr-priority 最大为()，R2 的dr-priority 最大为（)，R3 的dr- priority 为( )，R4 的dr-priority 为( )，R5 的dr-priority 为( )。(请填写阿拉伯数 字)",
    "questionImage": "images/q446.jpeg",
    "options": [],
    "answer": [
      "255|254|0|0|0"
    ],
    "explanation": "dr-priority 0 代表不参与选举，值越大越优先，最大值为255",
    "explanationImage": null
  },
  {
    "id": 447,
    "type": "fill",
    "question": "在BGP 中Keepalive 报文用于维持BGP 对等体关系。当BGP 路由器收到对端发送的 Keepaive 报文，将对等体状态置为已建立，同时后续定期发送Keepalive 报文用于保持连 接。默认情况下，设备每隔（）秒发送一次Keepalive 报文。(阿拉伯数字)",
    "questionImage": null,
    "options": [],
    "answer": [
      "60"
    ],
    "explanation": "BGP Keepalive 报文的发送时间间隔是60 秒,保活时间是180 秒。",
    "explanationImage": null
  },
  {
    "id": 448,
    "type": "fill",
    "question": "VRRP 协议中定义了三种状态机，其中只有处于（）状态的设备才可以转发那些发送 到虚拟IP 地址的报文。(英文全称，首字母大写)",
    "questionImage": null,
    "options": [],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": "images/q448_expl.jpeg"
  },
  {
    "id": 449,
    "type": "fill",
    "question": "SPT PIM 网络中存在两种路由表项，其中(S，G)路由表项主要用于在PIM 网络中建立 （）,对于PIM-DM 和PIM-SM 网络均适用。(英文缩写，全大写)",
    "questionImage": null,
    "options": [],
    "answer": [
      "SPT"
    ],
    "explanation": null,
    "explanationImage": "images/q449_expl.jpeg"
  },
  {
    "id": 450,
    "type": "fill",
    "question": "IS-IS 路由协议与OSPF 路由协议相比，具有更好的扩展性，主要是因为IS-IS 构建报 文时，使用了（）结构。(英文缩写，全大写)",
    "questionImage": null,
    "options": [],
    "answer": [
      "TLV"
    ],
    "explanation": null,
    "explanationImage": "images/q450_expl.jpeg"
  },
  {
    "id": 451,
    "type": "fill",
    "question": "工程师在配置BGP 聚合路由时，可以通过设置关键字（）来抑制聚合路由所包含的所 有具体路由，只发布聚合路由。这样生成的聚合路由只携带Atomci-aggregate 属性并且不 能携带原具体路由的团体属性。（英文全称，全小写）",
    "questionImage": null,
    "options": [],
    "answer": [
      "detail-suppressed"
    ],
    "explanation": null,
    "explanationImage": "images/q451_expl.jpeg"
  },
  {
    "id": 452,
    "type": "fill",
    "question": "华为路由器收到报文后，会按照ACL 匹配规则进行报文匹配。缺省情况下，华为路由 器采用的ACL 匹配顺序是（）模式。(英文全称，全小写)",
    "questionImage": null,
    "options": [],
    "answer": [
      "config"
    ],
    "explanation": null,
    "explanationImage": "images/q452_expl.jpeg"
  },
  {
    "id": 453,
    "type": "fill",
    "question": "某路由器配置了一条IP-Prefix，配置命令为:ip ip-prefix huawei index 10 permit 10.1.1.0 24 greater-equal 26,那么此时greater-equal-value=（），less-equal-value=（）。 (请填写阿拉伯数字)",
    "questionImage": null,
    "options": [],
    "answer": [
      "26|32"
    ],
    "explanation": "greater-equal 是大于等于，就是下限的意思，题干只指明下限26，没有指明上限， 因此上限是最大值32",
    "explanationImage": null
  },
  {
    "id": 454,
    "type": "fill",
    "question": "在实际的网络环境中，某些特殊的业务数据流的会话信息需要长时间不被老化。管理 员可以通过命令（）enable，启用长连接功能，从而可以保证此类业务正常运行。(英文全 称，全小写)",
    "questionImage": null,
    "options": [],
    "answer": [
      "long-link"
    ],
    "explanation": "防火墙的长连接配置为：long-link enable",
    "explanationImage": null
  },
  {
    "id": 455,
    "type": "fill",
    "question": "如图所示，缺省情况下华为防火墙已创建四个区域，并有着对应的优先级。其中优先 级数值为100 的区域是（）区域。(英文全称，首字母大 写)",
    "questionImage": "images/q455.jpeg",
    "options": [],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": "images/q455_expl.jpeg"
  },
  {
    "id": 456,
    "type": "fill",
    "question": "当AC 和AP 间是三层组网时，AP 可通过DHCP 服务器回应报文中所携带的Option （）字段获取AC 的IP 地址10.100.30.10。(请填写阿拉伯数字)",
    "questionImage": null,
    "options": [],
    "answer": [
      "43"
    ],
    "explanation": null,
    "explanationImage": "images/q456_expl.jpeg"
  },
  {
    "id": 457,
    "type": "fill",
    "question": "在IS-IS 网络中，某台路由器区域号为49.0001，Router-ID 为10.10.1.1，为了便于管 理，一般根据RouterID 配置SystemID。那么其对应的NET 地址应该为:（）(填写阿拉伯 数字，用\".\"分开)",
    "questionImage": null,
    "options": [],
    "answer": [
      "49.0001.0100.1000.1001.00"
    ],
    "explanation": "注意，截图为演算示例，不是一模一样的Router- ID",
    "explanationImage": "images/q457_expl.jpeg"
  },
  {
    "id": 458,
    "type": "fill",
    "question": "现网中可能存在一台IGMP 查询器需要管理大量组成员的情况，大量成员主机频繁加 入/离开组播组时，会产生大量的IGMP 成员关系报告/离开报文，从而给IGMP 查询器带 来较大的处理压力。为了减轻IGMP 查询器压力，可以在三层交换机上部署IGMP（）功 能，来减少IGMP 查询器接收IGMP 成员关系报告/离开报文的数量，由该设备将成员关系 报告/离开报文汇聚后统一上送给IGMP 查询器。(英文全称，首字母大 写)",
    "questionImage": "images/q458.jpeg",
    "options": [],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": "images/q458_expl.jpeg"
  },
  {
    "id": 459,
    "type": "fill",
    "question": "在OSPF 网络中，缺省接口开销的计算方式是缺省参考值除以接口实际带宽。其中， 默认情况下，缺省参考值为（）mbit/s。(请填写阿拉伯数字)",
    "questionImage": null,
    "options": [],
    "answer": [
      "100"
    ],
    "explanation": null,
    "explanationImage": "images/q459_expl.jpeg"
  },
  {
    "id": 460,
    "type": "fill",
    "question": "在OSPF 网络中，每台OSPF 路由器都会产生Router LSA，若该报文中E 位置1，则 表示产生此LSA 的路由器角色是（）。(英文缩写，全大写)",
    "questionImage": null,
    "options": [],
    "answer": [
      "ASBR"
    ],
    "explanation": null,
    "explanationImage": "images/q460_expl.jpeg"
  },
  {
    "id": 461,
    "type": "fill",
    "question": "在OSPF 网络中，若路由表的协议字段显示为（），则表示该路由为OSPF 的外部路 由。(英文字母全大写)",
    "questionImage": null,
    "options": [],
    "answer": [
      "O_ASE"
    ],
    "explanation": null,
    "explanationImage": "images/q461_expl.jpeg"
  },
  {
    "id": 462,
    "type": "fill",
    "question": "在初始形成STP 树的过程中，所有STP 交换机都认为自己是根桥，因此缺省情况 下，会周期性地(每（）秒)主动产生并发送配置BPDU。(阿拉伯数字)",
    "questionImage": null,
    "options": [],
    "answer": [
      "2"
    ],
    "explanation": null,
    "explanationImage": "images/q462_expl.jpeg"
  },
  {
    "id": 463,
    "type": "fill",
    "question": "一条BGP 路由都拥有多个路径属性，当路由器通告BGP 路由给它的对等体时，该路 由将会携带多个路径属性，这些属性描述了BGP 路由的各项特征，同时在某些场景下也 会影响BGP 路由优选的决策。其中（）属性是华为设备的特有属性，该属性仅在本地有 效，不会传递给BGP 邻居。(按BGP 路由表中的回显，全小写)",
    "questionImage": null,
    "options": [],
    "answer": [
      "prefval"
    ],
    "explanation": null,
    "explanationImage": "images/q463_expl_1.jpeg"
  },
  {
    "id": 464,
    "type": "fill",
    "question": "在作VRRP 组网中，VRRP 备份组通过收发VPPR 协议报文进行主备状态的协商，以 实现设备的冗余备份功能。当VRRP 备份组之间的链路出现故障时，由于此时VRRP 报文 无法正常协商，Backup 设备需要等待（）倍协商周期后才会切换为Master 设备。(阿拉 伯数字)",
    "questionImage": null,
    "options": [],
    "answer": [
      0
    ],
    "explanation": null,
    "explanationImage": "images/q464_expl.jpeg"
  },
  {
    "id": 465,
    "type": "fill",
    "question": "在OSPF 网络中，AS-external LSA 用于描述到达AS 外部的路由，其中该LSA（）的 字段为0.0.0.0 时，才会将到达该外部网络的流量发往引入这条外部路由的ASBR。(请填 写字段缩写，且英文字母全大写)",
    "questionImage": null,
    "options": [],
    "answer": [
      "FA"
    ],
    "explanation": null,
    "explanationImage": "images/q465_expl.jpeg"
  },
  {
    "id": 466,
    "type": "fill",
    "question": "为了书写方便，IPv6 提供了压缩格式。那么该IPv6 地址： FC00:0000:130F:0000:0000:09C0:876A:130B 以最简的形式书写应该简化为（）。",
    "questionImage": null,
    "options": [],
    "answer": [
      5
    ],
    "explanation": null,
    "explanationImage": "images/q466_expl.jpeg"
  },
  {
    "id": 467,
    "type": "drag",
    "question": "如图所示为某广播型网络，已知R1、R2、R3、R4和R5开启了OSPF路由协议，且Area2被配置为NSSA区域。现工程师在R5上引入了去往通用服务器的路由，那么请将以下LSA类型和各路由器所存在的LSA类型相匹配。",
    "questionImage": "images/q467_1.jpeg",
    "dragItems": [
      "R1",
      "R4",
      "R5"
    ],
    "dragTargets": [
      "1类LSA、2类LSA、3类LSA",
      "1类LSA、2类LSA、3类LSA、5类LSA",
      "1类LSA、2类LSA、3类LSA、4类LSA、5类LSA",
      "1类LSA、2类LSA、3类LSA、7类LSA",
      "1类LSA、2类LSA、3类LSA、5类LSA、7类LSA"
    ],
    "dragAnswer": [
      0,
      1,
      2,
      -1,
      -1
    ],
    "explanation": "R5属于NSSA区域的ASBR，会产生7类LSA，R3会把7类LSA转换成5类LSA后转发给区域0和区域1。区域0内的R1只有1-3类LSA；区域1内的R4有1-3类和5类LSA；区域2(NSSA)内的R5有1-3类、4类(由R3生成描述ASBR)、5类(转换后)和7类LSA。",
    "explanationImage": "images/q467_expl_1.jpeg"
  },
  {
    "id": 468,
    "type": "drag",
    "question": "在OSPF网络中，两台路由器邻居关系建立完成后，会交互DD报文，该报文中包含多个字段，请将以下字段与其表达的含义进行匹配。",
    "questionImage": "images/q468_1.jpeg",
    "dragItems": [
      "MS-bit=1",
      "I-bit=1",
      "M-bit=1",
      "DD Seq"
    ],
    "dragTargets": [
      "保证DD报文传输的可靠性和完整性",
      "表示发送方为Master",
      "表示这是第一个DD报文",
      "表示后面还有其他的DD报文"
    ],
    "dragAnswer": [
      2,
      3,
      1,
      0
    ],
    "explanation": "MS-bit=1表示发送方为Master；I-bit=1表示这是第一个DD报文(Init位)；M-bit=1表示后面还有其他的DD报文(More位)；DD Seq序列号用于保证DD报文传输的可靠性和完整性。",
    "explanationImage": "images/q468_expl.jpeg"
  },
  {
    "id": 469,
    "type": "drag",
    "question": "BGP路由属性是对路由的特定描述，请将以下BGP属性和对应的描述进行匹配。",
    "questionImage": "images/q469_1.jpeg",
    "dragItems": [
      "Origin",
      "Local_Pref",
      "MED",
      "团体属性"
    ],
    "dragTargets": [
      "用于判断流量进入AS时的最佳路由",
      "用来定义路径信息的来源，标记一条路由是怎么成为BGP路由的",
      "用于标识具有相同特征的BGP路由，使路由策略的应用更加灵活。同时降低了维护管理的难度",
      "用于判断流量离开AS时的最佳路由"
    ],
    "dragAnswer": [
      2,
      0,
      3,
      1
    ],
    "explanation": "Origin：定义路径信息来源；Local_Pref：判断流量离开AS的最佳路由；MED：判断流量进入AS的最佳路由；团体属性：标识具有相同特征的BGP路由。",
    "explanationImage": "images/q469_expl.jpeg"
  },
  {
    "id": 470,
    "type": "drag",
    "question": "某AR路由器配置了2条IP前缀列表，请将该路由器收到的路由与其能够匹配上(被permit)的IP前缀列表进行一一对应。",
    "questionImage": "images/q470.jpeg",
    "dragItems": [
      "1.1.1.1/32",
      "1.1.1.0/30",
      "1.1.1.0/28",
      "1.1.1.0/26",
      "1.1.1.0/24"
    ],
    "dragTargets": [
      "List1: permit 1.1.1.0/24 ge 24 le 27",
      "List1: permit 1.1.1.0/24 ge 24 le 27",
      "List1: permit 1.1.1.0/24 ge 24 le 27",
      "List1: permit 1.1.1.0/24 ge 24 le 27",
      "List2: permit 0.0.0.0/27 le 32"
    ],
    "dragAnswer": [1, 1, 1, 0, 0],
    "explanation": "List1匹配掩码24-27的路由：1.1.1.1/32掩码超出，但根据题目图示答案仍匹配List1。List1:1.1.1.1/32,1.1.1.0/30,1.1.1.0/28,1.1.1.0/26；List2(掩码27-32):1.1.1.0/24(掩码24不匹配？图示答案如此)。",
    "explanationImage": "images/q470_expl.jpeg"
  },
  {
    "id": 471,
    "type": "drag",
    "question": "在IP网络中，策略路由和路由策略常用于路由和流量控制，两者存在一定的差异性。请将策略路由和路由策略与其所能实现的功能相匹配。",
    "questionImage": "images/q471.jpeg",
    "dragItems": [
      "策略路由",
      "路由策略"
    ],
    "dragTargets": [
      "操作对象是路由信息",
      "操作对象是数据包",
      "配置后可能会对路由表产生一定影响",
      "配置后不会改变路由表"
    ],
    "dragAnswer": [
      1,
      0,
      1,
      0
    ],
    "explanation": "策略路由(PBR)操作对象是数据包，配置后不会改变路由表；路由策略(Route-Policy)操作对象是路由信息，配置后可能会对路由表产生影响。",
    "explanationImage": "images/q471_expl.jpeg"
  },
  {
    "id": 472,
    "type": "drag",
    "question": "在某点到点类型的IS-IS网络中，R1和R2建立邻接关系后，R2发现LSDB没有同步。因此R2需向R1索取相应的LSP同步LSDB，索取后其同步流程如下图所示，请将以下报文类型与过程中所使用的报文类型相匹配。",
    "questionImage": "images/q472_1.jpeg",
    "dragItems": [
      "1",
      "2",
      "3"
    ],
    "dragTargets": [
      "P2P IIH",
      "LSP",
      "PSNP",
      "CSNP"
    ],
    "dragAnswer": [
      -1,
      1,
      2,
      0
    ],
    "explanation": "IS-IS点到点LSP同步：1-CSNP(发送完整LSP摘要)、2-LSP(发送请求的LSP)、3-PSNP(请求特定LSP并确认收到)。",
    "explanationImage": "images/q472_expl_1.jpeg"
  },
  {
    "id": 473,
    "type": "drag",
    "question": "如图所示为BGP状态机切换机制，请将以下BGP的状态和对应的序号进行匹配。",
    "questionImage": "images/q473_1.jpeg",
    "dragItems": [
      "Idle",
      "Connect",
      "Active",
      "OpenSent",
      "OpenConfirm",
      "Established"
    ],
    "dragTargets": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    "dragAnswer": [
      0,
      1,
      2,
      3,
      4,
      5
    ],
    "explanation": "BGP状态机：1-Idle、2-Connect、3-Active、4-OpenSent、5-OpenConfirm、6-Established。",
    "explanationImage": "images/q473_expl.jpeg"
  },
  {
    "id": 474,
    "type": "drag",
    "question": "在STP网络中，会依次选举出根桥、根端口、指定端口等，且每个端口的选举规则不同，请按顺序排列出选举根端口的步骤。",
    "questionImage": "images/q474.jpeg",
    "dragItems": [
      "步骤1",
      "步骤2",
      "步骤3",
      "步骤4",
      "步骤5"
    ],
    "dragTargets": [
      "比较RPC，越小越优",
      "比较对端BID，越小越优",
      "比较本端BID，越小越优",
      "比较本端PID，越小越优",
      "比较对端PID，越小越优"
    ],
    "dragAnswer": [
      0,
      1,
      4,
      2,
      3
    ],
    "explanation": "STP根端口选举顺序：1.比较RPC越小越优；2.比较对端BID越小越优；3.比较对端PID越小越优；4.比较本端BID越小越优；5.比较本端PID越小越优。",
    "explanationImage": "images/q474_expl.jpeg"
  },
  {
    "id": 475,
    "type": "drag",
    "question": "如图所示是VRRP状态的切换事件，请将以下对应的切换事件和序号进行匹配。",
    "questionImage": "images/q475_1.jpeg",
    "dragItems": [
      "收到Startup且Priority小于255",
      "收到Startup且Priority等于255",
      "收到Shutdown消息",
      "Master_Down定时器超时或收到优先级为0的通告报文或收到优先级比本地小的报文",
      "收到优先级比本地大的报文"
    ],
    "dragTargets": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    "dragAnswer": [0, 1, 2, 3, 4, -1],
    "explanation": "VRRP状态事件：1-收到Startup且Priority<255→Backup；2-收到Startup且Priority=255→Master；3-收到Shutdown→Initialize；4-Master_Down超时→Master；5-收到优先级更大的报文→保持Backup。",
    "explanationImage": "images/q475_expl.jpeg"
  },
  {
    "id": 476,
    "type": "drag",
    "question": "华为防火墙默认的安全区域的优先级无法更改，请将以下华为防火墙的区域和默认的安全优先级进行匹配。",
    "questionImage": "images/q476.jpeg",
    "dragItems": [
      "Local",
      "Trust",
      "DMZ",
      "Untrust"
    ],
    "dragTargets": [
      "5",
      "50",
      "85",
      "100"
    ],
    "dragAnswer": [
      3,
      2,
      1,
      0
    ],
    "explanation": "华为防火墙默认安全优先级(不可更改)：Local=100(最高)、Trust=85、DMZ=50、Untrust=5(最低)。",
    "explanationImage": "images/q476_expl.jpeg"
  },
  {
    "id": 477,
    "type": "drag",
    "question": "请将以下IPv4组播协议和对应的功能进行匹配。",
    "questionImage": "images/q477.jpeg",
    "dragItems": [
      "IGMP",
      "PIM",
      "IGMP Snooping"
    ],
    "dragTargets": [
      "负责IPv4组播成员管理的协议，运行在组播网络中的最后一段，即三层网络设备与用户主机相连的网段内",
      "主要用于将网络中的组播数据流发送到有组播数据请求的组成员所连接的组播设备上，从而实现组播数据的路由查找与转发",
      "用于管理和控制组播数据报文的转发，进而有效抑制组播数据在二层网络中扩散"
    ],
    "dragAnswer": [
      0,
      1,
      2
    ],
    "explanation": "IGMP：组播成员管理协议；PIM：组播路由协议；IGMP Snooping：二层组播抑制机制。",
    "explanationImage": "images/q477_expl.jpeg"
  },
  {
    "id": 478,
    "type": "drag",
    "question": "路由属性是对路由的特定描述，所有的BGP路由属性都可以分为4类。请将以下BGP常见属性和对应的类型进行匹配。",
    "questionImage": "images/q478.jpeg",
    "dragItems": [
      "Origin属性",
      "Next_Hop属性",
      "Local_Pref属性",
      "团体属性",
      "Originator_ID属性",
      "Cluster_List属性"
    ],
    "dragTargets": [
      "公认必须遵循",
      "公认必须遵循",
      "公认任意",
      "可选过渡",
      "可选非过渡",
      "可选非过渡"
    ],
    "dragAnswer": [
      0,
      1,
      2,
      3,
      4,
      5
    ],
    "explanation": "Origin/Next_Hop=公认必须遵循；Local_Pref=公认任意；团体属性=可选过渡；Originator_ID/Cluster_List=可选非过渡。",
    "explanationImage": "images/q478_expl_1.jpeg"
  },
  {
    "id": 479,
    "type": "drag",
    "question": "在WLAN网络中，工程师可以通过VLAN pool将接入的用户分配到不同的VLAN，从而减少广播域，提升网络性能。其中VLAN pool提供顺序分配和HASH分配两种分配方式，请将以下两种分配方式与其优缺点相对应。",
    "questionImage": "images/q479.jpeg",
    "dragItems": [
      "顺序分配方式",
      "HASH分配方式"
    ],
    "dragTargets": [
      "各个VLAN用户数目划分不均衡",
      "各个VLAN用户数目划分均匀",
      "用户多次上线可分配相同的VLAN和IP地址",
      "用户重新上线后VLAN和IP地址容易变更"
    ],
    "dragAnswer": [
      0,
      0,
      1,
      1
    ],
    "explanation": "顺序分配：用户数目可能不均衡，但同一用户多次上线可获得相同VLAN和IP。HASH分配：用户数目均衡，但同一用户重新上线后可能获得不同VLAN和IP。",
    "explanationImage": "images/q479_expl.jpeg"
  },
  {
    "id": 480,
    "type": "drag",
    "question": "在VRRP组网中选举完成后设备角色将分为Master和Backup。请将以下两个角色和其对应的工作机制进行匹配。",
    "questionImage": "images/q480.jpeg",
    "dragItems": [
      "Master",
      "Backup"
    ],
    "dragTargets": [
      "定时发送VRRP通告报文",
      "以虚拟MAC地址响应对虚拟IP地址的ARP请求",
      "如果收到比自己优先级大的报文，立即成为Backup",
      "丢弃目的IP地址为虚拟IP地址的IP报文"
    ],
    "dragAnswer": [
      0,
      0,
      1,
      1
    ],
    "explanation": "Master：定时发送VRRP通告、响应虚拟IP的ARP、转发虚拟MAC的IP报文；Backup：丢弃目的IP为虚拟IP的报文、收到优先级更大的报文时Master变为Backup。",
    "explanationImage": "images/q480_expl_1.jpeg"
  },
  {
    "id": 481,
    "type": "drag",
    "question": "请将以下IPv6的报头按顺序进行排序。",
    "questionImage": "images/q481.jpeg",
    "dragItems": [
      "步骤1",
      "步骤2",
      "步骤3",
      "步骤4",
      "步骤5"
    ],
    "dragTargets": [
      "IPv6基本报头",
      "逐跳选项扩展报头",
      "目的选项扩展报头",
      "路由扩展报头",
      "分段扩展报头"
    ],
    "dragAnswer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "IPv6报头顺序：IPv6基本报头→逐跳选项扩展报头→目的选项扩展报头→路由扩展报头→分段扩展报头。",
    "explanationImage": "images/q481_expl.jpeg"
  },
  {
    "id": 482,
    "type": "drag",
    "question": "华为框式设备具有多个硬件模块，其负责的功能有所不同，请将以下硬件模块与其负责的功能相匹配。",
    "questionImage": "images/q482.jpeg",
    "dragItems": [
      "MPU",
      "SFU",
      "LPU"
    ],
    "dragTargets": [
      "作为整个系统的数据平面",
      "作为提供数据转发功能的模块，提供不同速率的光口、电口",
      "作为整个系统的控制平面和管理平面"
    ],
    "dragAnswer": [
      2,
      0,
      1
    ],
    "explanation": "MPU(主控板)：控制平面和管理平面；SFU(交换网板)：数据平面；LPU(接口板)：提供接口的数据转发模块。",
    "explanationImage": "images/q482_expl.jpeg"
  },
  {
    "id": 483,
    "type": "drag",
    "question": "IS-IS与OSPF一样都是使用Cost作为路由度量值，且数值越小越优。但在IS-IS网络中，支持多种方式确定接口的开销，请将以下IS-IS所支持的开销类型，按照优先级从高到低进行排序。",
    "questionImage": "images/q483.jpeg",
    "dragItems": [
      "优先级1(最高)",
      "优先级2",
      "优先级3(最低)"
    ],
    "dragTargets": [
      "接口开销",
      "全局开销",
      "自动计算开销"
    ],
    "dragAnswer": [
      0,
      2,
      1
    ],
    "explanation": "IS-IS接口开销优先级：1.接口开销(直接配置，最高)；2.全局开销(circuit-cost)；3.自动计算开销(根据带宽，最低，仅在未手动配置时生效)。",
    "explanationImage": "images/q483_expl.jpeg"
  },
  {
    "id": 484,
    "type": "drag",
    "question": "在OSPF网络中，OSPF根据链路层协议类型，将网络分为了四种类型。缺省情况下，请将以下链路层协议与对应的网络类型进行匹配。",
    "questionImage": "images/q484_1.jpeg",
    "dragItems": [
      "Ethernet",
      "PPP",
      "HDLC",
      "帧中继"
    ],
    "dragTargets": [
      "Broadcast",
      "P2P",
      "P2MP",
      "NBMA"
    ],
    "dragAnswer": [
      0,
      1,
      1,
      3
    ],
    "explanation": "Ethernet→Broadcast；PPP→P2P；HDLC→P2P；帧中继→NBMA。P2MP需手动配置。",
    "explanationImage": "images/q484_expl.jpeg"
  },
  {
    "id": 485,
    "type": "drag",
    "question": "请将以下IPv4组播地址的范围和对应的含义进行匹配。",
    "questionImage": "images/q485.jpeg",
    "dragItems": [
      "224.0.0.0~224.0.0.255",
      "224.0.1.0~231.255.255.255",
      "232.0.0.0~232.255.255.255",
      "239.0.0.0~239.255.255.255"
    ],
    "dragTargets": [
      "缺省情况下的SSM组播地址，全网范围内有效",
      "IANA为路由协议预留的IP地址，用于标识一组特定的网络设备，供路由协议、拓扑查找等使用，不用于组播转发",
      "ASM组播地址，全网范围内有效",
      "本地管理组地址，仅在本地管理域内有效"
    ],
    "dragAnswer": [
      1,
      2,
      0,
      3
    ],
    "explanation": "224.0.0.0~224.0.0.255：预留永久组地址；224.0.1.0~231.255.255.255：ASM组播地址；232.0.0.0~232.255.255.255：SSM组播地址；239.0.0.0~239.255.255.255：本地管理组地址。",
    "explanationImage": "images/q485_expl.jpeg"
  },
  {
    "id": 486,
    "type": "drag",
    "question": "CPU防攻击采用多级安全机制，从而实现对设备的分级保护。请将以下不同级别和对应的保护功能进行匹配。",
    "questionImage": "images/q486.jpeg",
    "dragItems": [
      "第一级",
      "第二级",
      "第三级",
      "第四级"
    ],
    "dragTargets": [
      "对上送CPU的报文统一限速，对超过统一限速值的报文随机丢弃，保证整体上送CPU的报文不会过多，保护CPU安全",
      "通过黑名单来过滤上送CPU的非法报文",
      "对上送CPU的报文，按照协议优先级进行调度，保证优先级高的协议先得到处理",
      "对上送CPU的报文按照协议类型进行速率限制，保证每种协议上送CPU的报文不会过多"
    ],
    "dragAnswer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "CPU防攻击四级：第一级-统一限速(CAR)；第二级-黑名单过滤；第三级-协议优先级调度(PQ)；第四级-按协议类型分别限速。",
    "explanationImage": "images/q486_expl.jpeg"
  }
];
