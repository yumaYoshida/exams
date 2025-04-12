export const quizData = [
  {
    id: 1,
    question:
      "次のコードを実行した結果として正しいものを選びなさい。\n\nint x = 5;\nSystem.out.println(x++ + ++x);",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2,
    explanation:
      "式 x++ + ++x の評価過程は次の通りです：\n1. x++ は後置インクリメントなので、まず現在の値 5 が使われ、その後 x は 6 になります。\n2. ++x は前置インクリメントなので、まず x が 7 になり、その値が使われます。\n3. 最終的に 5 + 7 = 12 が計算されます。",
  },
  {
    id: 2,
    question:
      "次のうち、Javaの基本データ型（プリミティブ型）でないものはどれですか？",
    options: ["int", "float", "String", "boolean"],
    correctAnswer: 2,
    explanation:
      "Stringはプリミティブ型ではなく、参照型（オブジェクト型）です。Javaの基本データ型は、byte、short、int、long、float、double、char、booleanの8つです。",
  },
  {
    id: 3,
    question:
      '次のコードの出力として正しいものを選びなさい。\n\nString s1 = "Hello";\nString s2 = new String("Hello");\nSystem.out.println(s1 == s2);',
    options: ["true", "false", "コンパイルエラー", "実行時例外"],
    correctAnswer: 1,
    explanation:
      "== 演算子は参照型の場合、オブジェクトの参照（メモリアドレス）を比較します。s1はString literalプールに保存されますが、s2は新しいオブジェクトとしてヒープ領域に作成されるため、両者は異なるオブジェクトを参照しています。したがって、s1 == s2はfalseとなります。内容を比較するにはequals()メソッドを使用する必要があります。",
  },
  {
    id: 4,
    question:
      '次のコードを実行した結果として正しいものを選びなさい。\n\nint[] array = {1, 2, 3, 4, 5};\nfor(int i = 0; i < array.length; i += 2) {\n    System.out.print(array[i] + " ");\n}',
    options: ["1 2 3 4 5", "1 3 5", "2 4", "1 2 3"],
    correctAnswer: 1,
    explanation:
      "このforループでは、インデックスiは0から始まり、2ずつ増加します。つまり、i=0, 2, 4となります。したがって、array[0]=1, array[2]=3, array[4]=5が順に出力され、結果は「1 3 5」となります。",
  },
  {
    id: 5,
    question:
      "次のうち、Javaにおいてオーバーロードの条件として正しいものはどれですか？",
    options: [
      "メソッド名が異なること",
      "戻り値の型が異なること",
      "パラメータリスト（引数の型または数）が異なること",
      "アクセス修飾子が異なること",
    ],
    correctAnswer: 2,
    explanation:
      "Javaでメソッドをオーバーロードするには、同じクラス内で同じメソッド名を持ち、パラメータリスト（引数の型または数）が異なる必要があります。戻り値の型やアクセス修飾子だけが異なる場合はオーバーロードとはみなされません。",
  },
  {
    id: 6,
    question:
      '次のコードの実行結果として正しいものを選びなさい。\n\npublic static void main(String[] args) {\n    try {\n        int data = 50/0;\n    } catch(ArithmeticException e) {\n        System.out.print("Exception ");\n    } finally {\n        System.out.print("Finally ");\n    }\n    System.out.print("Finished");\n}',
    options: [
      "Exception Finally Finished",
      "Exception Finished",
      "Finally Finished",
      "コンパイルエラー",
    ],
    correctAnswer: 0,
    explanation:
      'try ブロック内で 50/0 による ArithmeticException が発生します。これにより catch ブロックが実行され "Exception " が出力されます。その後、finally ブロックが実行され "Finally " が出力されます。最後に try-catch-finally の外の文が実行され "Finished" が出力されます。したがって、出力は "Exception Finally Finished" となります。',
  },
  {
    id: 7,
    question:
      "次のコードのコンパイル結果として正しいものを選びなさい。\n\npublic class Test {\n    public static void main(String[] args) {\n        byte b = 100;\n        int i = 200;\n        b = b + i; // Line 1\n        System.out.println(b);\n    }\n}",
    options: [
      "コンパイルエラー（Line 1）",
      "300",
      "44（300 を byte の範囲に収めた値）",
      "ランタイムエラー",
    ],
    correctAnswer: 0,
    explanation:
      "byte型とint型の加算結果はint型になります。そのため、b = b + i の行ではint型からbyte型への暗黙的なダウンキャストが必要になりますが、これはコンパイラによって許可されません。このコードをコンパイルするには、明示的なキャストが必要です：b = (byte)(b + i); ただし、この場合、300はbyte型の範囲（-128〜127）を超えるため、実際の値は44になります。",
  },
  {
    id: 8,
    question:
      '次のコードについて正しい説明はどれですか？\n\npublic class Test {\n    public static void main(String[] args) {\n        String s1 = "Java";\n        String s2 = "Java";\n        StringBuilder sb1 = new StringBuilder();\n        sb1.append("Ja").append("va");\n        System.out.println(s1 == s2);\n        System.out.println(s1 == sb1.toString());\n    }\n}',
    options: [
      "true、true が出力される",
      "true、false が出力される",
      "false、true が出力される",
      "false、false が出力される",
    ],
    correctAnswer: 1,
    explanation:
      '文字列リテラル "Java" は文字列プールに保存されるため、s1 と s2 は同じオブジェクトを参照します。したがって、s1 == s2 は true となります。一方、StringBuilder の toString() メソッドは新しい String オブジェクトを生成するため、s1 と sb1.toString() は異なるオブジェクトとなります。したがって、s1 == sb1.toString() は false となります。',
  },
  {
    id: 9,
    question:
      "Javaのアクセス修飾子について、可視性の範囲が広い順に並べたものとして正しいのはどれですか？",
    options: [
      "public > protected > default > private",
      "public > default > protected > private",
      "protected > public > default > private",
      "private > default > protected > public",
    ],
    correctAnswer: 0,
    explanation:
      "Javaのアクセス修飾子の可視性の範囲は次の通りです：\n- public: どこからでもアクセス可能\n- protected: 同一パッケージ内およびサブクラスからアクセス可能\n- default（修飾子なし）: 同一パッケージ内からのみアクセス可能\n- private: 同一クラス内からのみアクセス可能\nしたがって、可視性の範囲が広い順に並べると「public > protected > default > private」となります。",
  },
  {
    id: 10,
    question:
      "次のコードの実行結果として正しいものを選びなさい。\n\npublic class Test {\n    public static void main(String[] args) {\n        int[] numbers = {1, 2, 3, 4, 5};\n        int sum = 0;\n        for (int x : numbers) {\n            if (x % 2 == 0) {\n                continue;\n            }\n            sum += x;\n        }\n        System.out.println(sum);\n    }\n}",
    options: ["9", "15", "6", "0"],
    correctAnswer: 0,
    explanation:
      "このコードでは、拡張for文を使って配列の各要素に対して処理を行っています。偶数（x % 2 == 0が真）の場合はcontinueにより処理をスキップし、奇数の場合のみsumに加算します。配列内の奇数は1, 3, 5なので、合計は1 + 3 + 5 = 9となります。",
  },
  {
    id: 11,
    question:
      "Javaのコレクションフレームワークについて、次の説明のうち正しいものはどれですか？",
    options: [
      "HashMapはキーの順序を保持する",
      "ArrayListは常にスレッドセーフである",
      "LinkedListはランダムアクセスが得意である",
      "TreeSetは要素を自然順序または指定されたComparatorに従って並べ替える",
    ],
    correctAnswer: 3,
    explanation:
      "TreeSetは要素をソートされた順序で保持するSetインターフェースの実装です。要素は自然順序（Comparableインターフェースによる）、または構築時に提供されたComparatorによって並べ替えられます。HashMapはキーの順序を保持せず、ArrayListはスレッドセーフではなく、LinkedListはシーケンシャルアクセスに最適化されていてランダムアクセスは得意ではありません。",
  },
  {
    id: 12,
    question:
      '次のコードを実行した結果として正しいものを選びなさい。\n\npublic class Test {\n    public static void main(String[] args) {\n        String str = "Hello";\n        str.concat(" World");\n        System.out.println(str);\n    }\n}',
    options: ["Hello World", "Hello", "World", "コンパイルエラー"],
    correctAnswer: 1,
    explanation:
      'Stringオブジェクトはイミュータブル（不変）です。concat()メソッドは新しいStringオブジェクトを生成して返しますが、元のオブジェクトは変更されません。このコードではconcat()の結果を変数に代入していないため、str変数の内容は変わらず、出力は "Hello" となります。',
  },
  {
    id: 13,
    question:
      '次のコードの出力として正しいものを選びなさい。\n\npublic class Test {\n    public static void main(String[] args) {\n        int x = 10;\n        int y = 20;\n        System.out.println(x + y + " = " + x + y);\n    }\n}',
    options: ["30 = 30", "30 = 1020", "1020 = 1020", "30 = 10 + 20"],
    correctAnswer: 1,
    explanation:
      '式 x + y + " = " + x + y の評価は左から右へ行われます。まず x + y が計算され 30 になります。次に 30 + " = " で "30 = " という文字列になります。そして "30 = " + x で "30 = 10" となり、最後に "30 = 10" + y で "30 = 1020" が出力されます。+ 演算子は左オペランドまたは右オペランドのいずれかが文字列の場合、文字列連結として機能します。',
  },
  {
    id: 14,
    question:
      '次のコードを実行した場合の出力として正しいものを選びなさい。\n\npublic class Test {\n    public static void main(String[] args) {\n        String[] array = {"A", "B", "C"};\n        for(int i = 0; i < array.length; i++) {\n            System.out.print(array[i]);\n            if(array[i].equals("C")) {\n                break;\n            }\n            continue;\n        }\n    }\n}',
    options: ["A", "AB", "ABC", "コンパイルエラー"],
    correctAnswer: 2,
    explanation:
      'forループでは、配列の各要素が順番に処理されます。最初に "A" が出力され、"A".equals("C") は false なので continue が実行されます。次に "B" が出力され、同様に continue が実行されます。最後に "C" が出力され、"C".equals("C") は true なので break が実行されループが終了します。したがって、出力は "ABC" となります。なお、このコードではcontinueは冗長ですが、エラーにはなりません。',
  },
  {
    id: 15,
    question:
      "次のコードを実行した場合の結果として正しいものを選びなさい。\n\npublic class Test {\n    public static void main(String[] args) {\n        Integer i1 = 127;\n        Integer i2 = 127;\n        Integer i3 = 128;\n        Integer i4 = 128;\n        System.out.println(i1 == i2);\n        System.out.println(i3 == i4);\n    }\n}",
    options: ["true, true", "false, false", "true, false", "false, true"],
    correctAnswer: 2,
    explanation:
      "Java では、Integer クラスは -128 から 127 までの値をキャッシュします。つまり、この範囲内の値に対しては同じオブジェクトが再利用されます。i1 と i2 は両方とも 127 なので、同じオブジェクトを参照します。したがって i1 == i2 は true です。一方、128 はこのキャッシュ範囲外なので、i3 と i4 は別々のオブジェクトとして生成されます。したがって i3 == i4 は false です。オブジェクトの内容を比較するには equals() メソッドを使用すべきです。",
  },
];
