package com.accolite.au.java;

public class HashMapCustom<K,V> {
	Entry<K,V>[] buckets;
	int capacity = 3;
	Entry<K,V> head;
	Entry<K,V> tail;
	static class Entry<K,V>
	{
		K key;
		V value;
		 Entry<K,V>next;
         Entry<K,V>before;
         Entry<K,V>after;
         public Entry(K key ,V value,Entry<K,V> next)
         {
             this.key=key;
             this.value=value;
             this.next=next;
         }   
	}

	 public HashMapCustom()
     {
         buckets=new Entry[capacity];    
     }
	 
	 public void put(K key,V value)
     {
         if(key==null)
         {
             return;
         }
         boolean replace=false;
         int hash=hash(key);
         Entry<K,V> newEntry = new Entry<K,V>(key, value, null); 
         Entry<K,V>curr=buckets[hash];

         if(curr==null)
         {
           buckets[hash]=newEntry;
         }
         else
         {
             Entry<K,V> prev=null;
         while(curr!=null)
         {
             if(curr.key.equals(key))
             {
                 replace=true;
                 curr.value=value;
                 break;
             }
             prev=curr;
             curr=curr.next;
         }
          if(prev!=null)
          prev.next=newEntry;
         }
       
         if(replace==false)
         insertInList(newEntry);
     }
	
	  private void insertInList(Entry<K,V> newEntry)
      {
          if(head==null)
          {
              head=newEntry;
              tail=newEntry;
          }
          else
          {
            tail.after=newEntry;
            newEntry.before=tail;
            tail=newEntry;
          }
      }
	  
	  public V get(K key)
      {   
          int hash=hash(key);
          Entry<K,V> curr=buckets[hash];
          while(curr!=null)
          {
              if(curr.key.equals(key))
              {
                  return curr.value;
              }
              curr=curr.next;
          }
          return null;
      }
	  
	  public void display()
      {
          Entry<K,V>curr=head;
          while(curr!=null)
          {
            System.out.println("key is "+ curr.key+"val is "+ curr.value+"->");   
            curr=curr.after;
          }
      }   
      private int hash(K key){
          return Math.abs(key.hashCode()) % capacity;
      }

      public void remove(K key)
      {
    	  int r=-1;
          int hash=hash(key);
          Entry<K,V>curr=buckets[hash];
          if(curr==null)//no exist
          {
        	  System.out.println("entry not found\n");
              return;
          }
          Entry<K,V>p=null;
          Entry<K,V>n;
          while(curr!=null)
          {
              n=curr.next;
              if(curr.key.equals(key))
              {
                 r = 0;
                 if(p==null)//first
                 {
                     buckets[hash]=buckets[hash].next;
                 }
                 else
                 {
                     p.next=n;
                 }
                 //adjust Linked List
                 adjustList(curr);
                 break;
              }
              p=curr;
              curr=n;
          }
          if(r==-1) {
        	  System.out.println("entry not found\n");
          }
       //return r;
      }
      private void adjustList(Entry<K,V> curr)
      {
          if(curr==head)
          {
              head=head.after;
              if(head==null)
              {
                  tail=null;
              }
          }
          else if (curr==tail)
          {
              tail=tail.before;
              tail.after=null;
          }
          else
          {
              curr.before.after=curr.after;
              curr.after.before=curr.before;
          }
      }
      
      
      public static void main(String[] args) {
    	  HashMapCustom <Integer, Integer> hmc = new HashMapCustom<Integer, Integer>();
    	  hmc.put(21, 12);
          hmc.put(25, 143);
          hmc.put(30, 161);
          hmc.put(33, 65);
          hmc.put(35, 98);

          System.out.println("Using get function\n");
          System.out.println("value for key 25="
                       + hmc.get(25));
          System.out.println("value for key 54="
                       + hmc.get(54));

          System.out.print("Displaying : ");
          hmc.display();

          System.out.println("\n\nremoving key 21");
           hmc.remove(21);
          System.out.println("removing key 22");
          hmc.remove(22);

          System.out.print("Displaying : ");
          hmc.display();

      }
}

